import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class stop_text {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
