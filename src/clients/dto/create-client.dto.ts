import { IsEmail,IsNotEmpty } from "class-validator";

export class CreateClientDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  phone: string;

  @IsEmail()
  email?: string;
}
