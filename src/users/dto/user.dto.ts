export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  phone?: string;
}

export class SigninDto {
  email: string;
  password: string;
}