import { faker } from '@faker-js/faker';

type Role = "Junior Software Engineer" | "Software Engineer" | "Senior Software Engineer" | "Principal Software Engineer" | "Staff Engineer";

type MemberType = {
  _id: string;
  avatar: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
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
  };
}

export { type MemberType, createMember };