import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided.' });
  }

  const [, token] = authHeader.split(' ');
  // console.log(token);

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    console.log('..', decoded);

    req.userId = decoded.id;
    req.userPermission = decoded.permission_level;

    return next();
  } catch (err) {
    return res
      .status(401)
      .json({ error: 'Error trying to authenticate.', errorMessage: err });
  }
};