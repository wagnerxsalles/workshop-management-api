import { IsEmail,IsNotEmpty, IsOptional } from "class-validator";

export class CreateClientDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  phone: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
