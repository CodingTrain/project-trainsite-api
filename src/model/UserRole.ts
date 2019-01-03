import { registerEnumType } from 'type-graphql';

export enum UserRole {
  Passenger,
  Conductor,
  Driver,
  TrainMechanic,
}

registerEnumType(UserRole, {
  name: 'UserRole',
  description: "The user's role!",
});
