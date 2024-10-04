Cypress.Commands.add('selectTypeSecurity', (typeSecurity) => {
    cy.get('[data-testid="value-selected"]')
        .click()
        .then(() => {
            cy.get(".css-1f9fwhc").contains(typeSecurity).click();
        });
    cy.contains('Cotar grátis').click();
});

Cypress.Commands.add('selectDynamicQuestion', (quando) => {
    cy.get(`[data-testid="valueDynamicQuestion-${quando}"]`).click();
});

Cypress.Commands.add('selectVehicleType', (typeVehicle) => {
    cy.get(`[data-testid="vehicleType-${typeVehicle}"]`).wait(1000).click();
});

Cypress.Commands.add('carBrand', (carBrand) => {
    cy.get(`[data-testid="carBrand-${carBrand}"]`).wait(1000).click();
});

Cypress.Commands.add('selectYearManufactureAndModel', (manufacture, model) => {
    cy.get(`[data-testid="manufactureYear-${manufacture}"]`).wait(1000).click();
    cy.get(`[data-testid="modelYear-${model}"]`).wait(1000).click();
});

Cypress.Commands.add('carModel', (model) => {
    cy.get(`[data-testid="modelsCar-${model}"]`).wait(1000).click();
});

Cypress.Commands.add('carVersion', (version) => {
    cy.contains('label', version)
        .find('input[type="radio"]') // Encontra o input dentro do label
        .check();
});

Cypress.Commands.add('aboutTheVehicle', (aboult) => {
    cy.get(`[data-testid="aboutCar-${aboult}"]`).wait(1000).click();
});

Cypress.Commands.add('financedCar', (financedCar) => {
    cy.get(`[data-testid="financedCar-${financedCar}"]`).wait(1000).click();
});

Cypress.Commands.add('buttonSubmit', () => {
    cy.get(`[data-testid="submit"]`).wait(1000).click();
});
