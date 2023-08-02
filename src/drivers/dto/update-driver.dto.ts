import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverDto } from './create-driver.dto';
import { IsString, IsNumber, Min, Max } from 'class-validator';
export class UpdateDriverDto extends PartialType(CreateDriverDto) {
  @IsString()
  name?: string;

  @IsString()
  @Min(13)
  @Max(13)
  cnic?: number;

  @IsNumber()
  experience?: number;
}
