// Global configuration and Prisma client for MySQL-only setup.
import { PrismaClient } from "@prisma/sdk";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import { Singleton } from "tstl";
import typia from "typia";

interface IEnvironments {
  MODE: "local" | "dev" | "real";
  API_PORT: `${number}`;
  SYSTEM_PASSWORD: string;

  // MySQL configuration only
  MYSQL_URL: string;
  MYSQL_HOST: string;
  MYSQL_PORT: `${number}`;
  MYSQL_DATABASE: string;
  MYSQL_USERNAME: string;
  MYSQL_USERNAME_READONLY: string;
  MYSQL_PASSWORD: string;
}
const envSingleton = new Singleton(() => {
  const env = dotenv.config();
  dotenvExpand.expand(env);
  return typia.assert<IEnvironments>(process.env);
});
const prismaSingleton = new Singleton(() => {
  const env = envSingleton.get();
  const url = env.MYSQL_URL;

  // PrismaClient for MySQL requires the URL override so that migrations
  // and generated clients use the correct connection string.
  const options: any = {
    __internal: {
      configOverride: (config: any) => ({
        ...config,
        datasources: {
          ...config.datasources,
          db: { ...config.datasources.db, url },
        },
      }),
    },
  };
  return new PrismaClient(options);
});

/**
 * Global variables of the server.
 *
 * @author Samchon
 */
export class MyGlobal {
  public static testing: boolean = false;

  public static get prisma(): PrismaClient {
    return prismaSingleton.get();
  }
  public static get env(): IEnvironments {
    return envSingleton.get();
  }

  /**
   * Current mode.
   *
   *   - local: The server is on your local machine.
   *   - dev: The server is for the developer.
   *   - real: The server is for the real service.
   */
  public static get mode(): "local" | "dev" | "real" {
    return (modeWrapper.value ??= envSingleton.get().MODE);
  }

  /**
   * Set current mode.
   *
   * @param mode The new mode
   */
  public static setMode(mode: typeof MyGlobal.mode): void {
    typia.assert<typeof mode>(mode);
    modeWrapper.value = mode;
  }
}

interface IMode {
  value?: "local" | "dev" | "real";
}
const modeWrapper: IMode = {};
