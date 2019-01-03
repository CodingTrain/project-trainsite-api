import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { User } from '../model/User';

// @TODO(nilsweb): Implement real database!
const USERS = [new User('firstuser'), new User('seconduser')];

@Resolver(User)
export class UserResolver {
  @Query(returns => User, { nullable: true })
  async user(@Arg('username') username: string) {
    const user = USERS.find(user => user.username === username);
    if (user == null) throw new Error('User not found!');
    return user;
  }

  @Query(returns => [User], { nullable: 'items' })
  async users() {
    return USERS;
  }

  @Mutation(returns => Boolean)
  async createUser(@Arg('username') username: string) {
    // Don't allow duplicated users.
    const userAlreadyExists = USERS.find(user => user.username === username);
    if (userAlreadyExists) return false;

    // Perform user registration.
    const newUser = new User(username);
    USERS.push(newUser);
    return true;
  }
}
