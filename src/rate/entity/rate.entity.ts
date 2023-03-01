import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class rate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
