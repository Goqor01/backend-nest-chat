import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class routing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
