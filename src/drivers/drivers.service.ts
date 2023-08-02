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
  create(createDriverDto: CreateDriverDto) {
    const driver = new Driver();
    driver.name = createDriverDto.name;
    driver.contact = createDriverDto.contact;
    driver.cnic = createDriverDto.cnic;
    driver.experience = createDriverDto.experience;
    const newDriver = this.usersRepository.create(driver);
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
