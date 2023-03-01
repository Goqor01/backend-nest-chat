import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ocn_surcharge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
