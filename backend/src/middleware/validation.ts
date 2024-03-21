import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const validateMiddleware = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    console.log('rre', req.body);
    console.log('fff', result);
    if (!result.success) {
      return res.status(400).json({ errors: result });
    }
    next();
  };
};
