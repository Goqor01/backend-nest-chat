import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class rate_table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
