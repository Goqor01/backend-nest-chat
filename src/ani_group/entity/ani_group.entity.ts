import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ani_group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
