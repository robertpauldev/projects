import { faker } from '@faker-js/faker';
import roles from "../data/roles";
import locations from "../data/locations";

type Role = (typeof roles)[number];

type MemberType = {
  _id: string;
  avatar: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  location: string;
  gitHub: string;
}

const createMember = (): MemberType => {

  const sex       = faker.person.sexType();
  const firstName = faker.person.firstName( sex );
  const lastName  = faker.person.lastName();
  const email     = faker.internet.email({ firstName, lastName });
  const gitHub    = faker.internet.username({ firstName, lastName });

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    email,
    firstName,
    lastName,
    role: faker.helpers.arrayElement( roles ),
    location: faker.helpers.arrayElement( locations ),
    gitHub
  };
}

export { type MemberType, createMember };