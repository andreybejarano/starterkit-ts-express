import config from "../../config";

import { Sequelize } from '@sequelize/core';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: config.database.storage
});

export default sequelize;
