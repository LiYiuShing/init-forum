import { UsernamePasswordInput } from '../resolvers/UsernamePasswordInput';

// eslint-disable-next-line import/prefer-default-export
export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.username.length < 2) {
    return [
      {
        field: 'username',
        message: 'length must be greater than 2',
      },
    ];
  }

  if (options.username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'cannot include an @',
      },
    ];
  }

  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'invalid email',
      },
    ];
  }

  if (options.password.length <= 3) {
    return [
      {
        field: 'password',
        message: 'length must be greater than 3',
      },
    ];
  }

  return null;
};
