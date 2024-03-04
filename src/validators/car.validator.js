import Joi from 'joi';

import { carRegexp } from '../configs/car.regexp';

const carValidator = Joi.object({
  brand: Joi.string().regex(carRegexp.BRAND).required().messages({
    'string-pattern-base': 'min 1, max 20 chars',
  }),
  price: Joi.number().min(100).max(1000000).required().messages({
    'string-pattern-base': 'min 100, max 1000000',
  }),
  year: Joi.number()
    .min(1995)
    .max(new Date().getFullYear())
    .required()
    .messages({
      'string-pattern-base': `min year 1995, max year ${new Date().getFullYear()}`,
    }),
});

export { carValidator };
