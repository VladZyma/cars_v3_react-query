import Joi from 'joi';

import { userRegexp } from '../configs/user.regexp';

const userValidator = Joi.object({
  username: Joi.string().regex(userRegexp.NAME).required().messages({
    'string.pattern.base':
      'User name should include letters a-z A-Z, min 1 max 19',
  }),
  password: Joi.string().regex(userRegexp.PASSWORD).required().messages({
    'string.pattern.base':
      'Password should include 1 big letter, 1 number, 1 spacial sign! Min length 5.',
  }),
});

export { userValidator };
