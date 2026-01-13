import type { Config } from "@remotion/cli/config";

const config: Config = {
  codec: "h264",
  logLevel: "info",
  browserExecutable: undefined,
  timeoutInMilliseconds: 30000,
  chromiumOptions: {
    disableWebSecurity: false,
  },
  scale: 1,
  port: 8080,
};

export default config;
