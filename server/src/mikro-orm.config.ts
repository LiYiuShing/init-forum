import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { __prod__ } from './constant';
import Post from './entities/Post';
import User from './entities/User';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: 'init',
  type: 'postgresql',
  debug: !__prod__,
  password: 'root',
} as Parameters<typeof MikroORM.init>[0];
