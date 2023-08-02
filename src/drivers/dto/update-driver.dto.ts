import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverDto } from './create-driver.dto';
import { IsString, IsNumber, Length } from 'class-validator';
export class UpdateDriverDto extends PartialType(CreateDriverDto) {
  @IsString()
  name?: string;

  @IsString()
  @Length(11)
  contact?: string;

  @IsString()
  @Length(15)
  cnic?: string;

  @IsNumber()
  experience?: number;
}
