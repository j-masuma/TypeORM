import { IsString, IsNumber, Min, Max } from 'class-validator';

export class CreateDriverDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(13)
  @Max(13)
  cnic: number;

  @IsNumber()
  experience: number;
}
