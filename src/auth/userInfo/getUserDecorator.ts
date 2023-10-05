import { createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator((data, context) => {
  const req = context.switchToHttp().getRequest();
  return req.userInfo;
});
