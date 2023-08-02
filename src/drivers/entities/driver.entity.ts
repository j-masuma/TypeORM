import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number; //auto incrementing int

  @Column()
  name: string;

  cnic: number;

  @Column()
  experience: number;
}
