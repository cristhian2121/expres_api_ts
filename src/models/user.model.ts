export interface IUser {
  id: number,
  name: string,
  email: string,
  password: string,
  create_at: Date
}

export type IUserDTO = Omit<IUser, "id">