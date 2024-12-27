// src/env.mjs
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		GITHUB_API_URL: z.string().url().endsWith("/"),
		GITHUB_API_TOKEN: z.string().min(1),
		GITHUB_API_OWNER: z.string().min(1),
		GITHUB_API_VERSION: z.string().min(1),
	},
	runtimeEnv: import.meta.env,
});
