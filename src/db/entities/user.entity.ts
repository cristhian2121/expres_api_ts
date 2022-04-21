import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number
  @Column({ length: 100 })
  name!: string
  @Column({ length: 100 })
  email!: string
  @Column({length: 48})
  password!: string
  @Column({ default: new Date() })
  create_at!: Date
}