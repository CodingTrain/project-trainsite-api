import { ObjectType, Field, ID } from 'type-graphql';
import { UserRole } from './UserRole';

@ObjectType()
export class User {
  @Field(type => ID)
  readonly username: string;

  @Field({ nullable: true })
  displayName?: string;

  @Field({ nullable: true })
  bio?: string;

  @Field(type => UserRole)
  readonly role: UserRole = UserRole.Passenger;

  constructor(username: string) {
    this.username = username;
  }
}
