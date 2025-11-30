import { faker } from '@faker-js/faker';
import roles from "../data/roles";
import locations from "./locations";

type Role = (typeof roles)[number];

type MemberType = {
  _id: string;
  avatar: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  gitHub: string;
  location: string;
}

const createMember = (): MemberType => {

  const sex       = faker.person.sexType();
  const firstName = faker.person.firstName( sex );
  const lastName  = faker.person.lastName();
  const email     = faker.internet.email({ firstName, lastName });
  const gitHub    = faker.internet.username( { firstName, lastName });

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    email,
    firstName,
    lastName,
    role: faker.helpers.arrayElement( roles ),
    gitHub,
    location: faker.helpers.arrayElement( locations ),
  };
}

export { type MemberType, createMember };