import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Driver {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number; //auto incrementing int

  @Column()
  name: string;

  @Column()
  cnic: string;

  @Column()
  contact: string;

  @Column()
  experience: number;
  items: any;
}
