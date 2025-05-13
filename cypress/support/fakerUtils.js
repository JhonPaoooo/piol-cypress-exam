import { faker } from '@faker-js/faker';

export function createUser() {

    return {
      username: faker.internet.username(),
      fakeEmail: faker.internet.email(),
      password: faker.internet.password(),
    };
  }