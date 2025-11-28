import { faker } from '@faker-js/faker';
import roles from "../data/roles";

type Role = (typeof roles)[number];

type MemberType = {
  _id: string;
  avatar: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  location: string;
}

const createMember = (): MemberType => {

  const sex       = faker.person.sexType();
  const firstName = faker.person.firstName( sex );
  const lastName  = faker.person.lastName();
  const email     = faker.internet.email({ firstName, lastName });

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    email,
    firstName,
    lastName,
    role: faker.helpers.arrayElement([ "Junior Software Engineer", "Software Engineer", "Senior Software Engineer", "Principal Software Engineer", "Staff Engineer" ]),
    location: faker.helpers.arrayElement([ "North America", "South America", "Europe", "Africa", "Asia" ])
  };
}

export { type MemberType, createMember };