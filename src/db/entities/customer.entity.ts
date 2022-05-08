import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Costumers {
  @PrimaryGeneratedColumn()
  id!: number
  @Column({ length: 100 })
  name!: string
  @Column("text")
  lastName!: string
  @Column()
  phone!: string
  @Column()
  createdAt!: Date
}