import path from "path";
import { createLogger, format, Logger, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

let logger: Logger | null = null;

export namespace LoggerProvider {
  export const getLogger = (): Logger => {
    if (logger) return logger;

    const logDir = process.env.LOG_DIR ?? path.join(process.cwd(), "logs");
    const logLevel = process.env.LOG_LEVEL ?? (process.env.NODE_ENV === "production" ? "info" : "debug");

    const logFormat = format.combine(
      format.timestamp(),
      format.errors({ stack: true }),
      format.json(),
    );

    const fileTransport = new DailyRotateFile({
      dirname: logDir,
      filename: "app-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      maxFiles: "30d",
      format: logFormat,
    });

    const transportsList: any[] = [fileTransport];

    if (process.env.NODE_ENV !== "production") {
      transportsList.push(
        new transports.Console({
          format: format.combine(
            format.colorize(),
            format.simple(),
          ),
        }),
      );
    }

    logger = createLogger({
      level: logLevel,
      transports: transportsList,
    });

    return logger;
  };

  export const error = (message: string, context?: string, metadata?: Record<string, unknown>): void => {
    getLogger().error(message, { context, ...metadata });
  };

  export const warn = (message: string, context?: string, metadata?: Record<string, unknown>): void => {
    getLogger().warn(message, { context, ...metadata });
  };

  export const info = (message: string, context?: string, metadata?: Record<string, unknown>): void => {
    getLogger().info(message, { context, ...metadata });
  };

  export const debug = (message: string, context?: string, metadata?: Record<string, unknown>): void => {
    getLogger().debug(message, { context, ...metadata });
  };
}
