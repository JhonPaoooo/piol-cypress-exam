import { faker } from '@faker-js/faker';

describe('Verify Register while checkout', { testIsolation: false }, () => {
    let regularUser, quizMaster;

    before(() => {
        cy.visit('/register');
    });

    it('Verifies user registration for both Quiz Master and Regular User roles', () => {
        const roles = ['#role-user', '#role-quiz-master'];

        roles.forEach((role) => {
            const user = {
                username: faker.internet.userName(),
                fakeEmail: faker.internet.email(),
                password: faker.internet.password(),
            };

            if (role === '#role-user') {
                regularUser = user;
            } else {
                quizMaster = user;
            }

            cy.visit('/register');
            cy.register(user);
            cy.get(role).click();
            cy.get('button').should('contain', 'Register').click();

            cy.wait(4000);
            cy.get('.mb-6 > .text-3xl').should('contain', 'Sign in to your account');

            cy.clearCookies();
            cy.clearLocalStorage();
            cy.reload();
        });
    });

    it('Verify newly created account can successfully log in and access appropriate URL', () => {
        // Regular User login
        cy.visit('/login');
        cy.get('[data-testid="input-username"]').type(regularUser.username);
        cy.get('[data-testid="input-password"]').type(regularUser.password);
        cy.get('[data-testid="login-button"]').click();
        cy.wait(5000)
        cy.contains('Browse Topics').should('be.visible');  
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.reload();

        // Quiz Master login
        cy.visit('/login');
        cy.get('[data-testid="input-username"]').type(quizMaster.username);
        cy.get('[data-testid="input-password"]').type(quizMaster.password);
        cy.get('[data-testid="login-button"]').click();
        cy.wait(5000)
        cy.contains('Manage Topics').should('be.visible');  
    });
        // Bonus - Sad Path
    it('Verify Username is already taken', () => {
        cy.visit('/register');
        cy.get('#username').should('be.visible').type(regularUser.username)
        cy.get('#email').should('be.visible').type('Myemailemail@gmail.com')
        cy.get('#password').should('be.visible').type(regularUser.password)
        cy.get('#confirmPassword').should('be.visible').type(regularUser.password)
        cy.get('#role-user').click();
        cy.get(':nth-child(6) > .w-full').click();
        cy.contains('User already registered').should('be.visible');
    });
});
