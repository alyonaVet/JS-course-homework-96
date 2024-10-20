import {Model} from 'mongoose';

export interface UserFields {
  email: string;
  password: string;
  token: string;
  role: string;
  displayName: string;
  googleID?: string;
  avatar: string;
}

export interface UserMethods {
  checkPassword(password: string): Promise<boolean>;
  generateToken(): void;
}

export type UserModel = Model<UserFields, {}, UserMethods>

export interface Ingredient {
  name: string;
  amount: string;
}

export interface CocktailFields {
  user: string;
  title: string;
  image: string | null;
  recipe: string;
  ingredients: Ingredient[];
}

