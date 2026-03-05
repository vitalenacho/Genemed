import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { LoggerProvider } from "../providers/common/LoggerProvider";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req = context.switchToHttp().getRequest<{
      method: string;
      url: string;
      user?: { id?: string };
    }>();
    const method = req.method;
    const url = req.url;
    const userId = req.user?.id ?? "anonymous";
    const start = Date.now();

    return next.handle().pipe(
      tap({
        next: () => {
          const res = context.switchToHttp().getResponse<{ statusCode: number }>();
          const duration = Date.now() - start;
          LoggerProvider.info(
            `${method} ${url} ${res.statusCode} ${duration}ms`,
            "HTTP",
            { userId, method, url, statusCode: res.statusCode, duration },
          );
        },
        error: (err: Error & { status?: number }) => {
          const duration = Date.now() - start;
          LoggerProvider.error(
            `${method} ${url} ${err.status ?? 500} ${duration}ms`,
            "HTTP",
            { userId, method, url, statusCode: err.status ?? 500, duration },
          );
        },
      }),
    );
  }
}
