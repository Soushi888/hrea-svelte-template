import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    testTimeout: 60 * 1000 * 4, // 4 mins
    poolOptions: {
      forks: { singleFork: true },
    },
  },
});
