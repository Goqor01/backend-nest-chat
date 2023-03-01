import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
