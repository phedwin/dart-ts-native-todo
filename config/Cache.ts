
// config/cacheConfig.ts
import * as dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

export const cacheConfig = {
  cacheType: process.env.CACHE_TYPE || 'sqlite',
};
