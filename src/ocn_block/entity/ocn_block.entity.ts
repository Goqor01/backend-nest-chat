import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ocn_block {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
