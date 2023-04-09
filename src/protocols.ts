export type Signup = {
  username: string,
  email: string,
  password: string
};

export type Signin = {
  email: string,
  password: string
};

export type Entertainment = {
  name: string,
  imageUrl: string,
  typeId: number,
  category1Id?: number,
  category2Id?: number,
  category3Id?: number,
  grade?: number,
  comment?: string
};

export type goal ={
  quantity: number,
  goal: number,
  typeId: number,
  month: number,
  year: number
}

export type user = {
  pictureUrl: string,
  email: string,
  username: string
}
