import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './entities/driver.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver) private usersRepository: Repository<Driver>,
  ) {}
  create(CreateDriverDto: CreateDriverDto) {
    const newDriver = this.usersRepository.create(CreateDriverDto);
    return this.usersRepository.save(newDriver);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateDriverDto: UpdateDriverDto) {
    const driver = await this.findOne(id);

    return this.usersRepository.save({ ...driver, ...updateDriverDto });
  }

  async remove(id: number) {
    const driver = await this.findOne(id);
    return this.usersRepository.remove(driver);
  }
}
// function InjectRepository(
//   Driver: typeof Driver,
// ): (
//   target: typeof DriversService,
//   propertyKey: undefined,
//   parameterIndex: 0,
// ) => void {
//   throw new Error('Function not implemented.');
// }
