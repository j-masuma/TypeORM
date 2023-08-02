import { IsString, IsNumber, Length } from 'class-validator';

export class CreateDriverDto {
  @IsString()
  name: string;

  @IsString()
  @Length(11)
  contact: string;

  @IsString()
  @Length(15)
  cnic: string;

  @IsNumber()
  experience: number;
}
