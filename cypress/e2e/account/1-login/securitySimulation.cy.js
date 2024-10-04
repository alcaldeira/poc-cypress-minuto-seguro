describe('Simular seguro', { tags: ['@regressivo'] }, () => {
  beforeEach(() => {
    cy.visit('https://www.minutoseguros.com.br/')
  })

  it('Efetuar Simulação de seguro', { tags: ['@smoke', '@regressivo', '@checkout'] }, () => {
    cy.selectTypeSecurity('Seguro auto')
    cy.selectDynamicQuestion('PESQUISANDO_PARA_COMPRAR_UM_NOVO_VEICULO_V2')
    cy.selectVehicleType('Carro')
    cy.carBrand('toyota')
    cy.selectYearManufactureAndModel('2023', '2024')
    cy.carModel('CAMRY')
    cy.carVersion('CAMRY COUPE LE 2.2 16V GASOLINA MANUAL 2P')
    cy.aboutTheVehicle('É zero KM')
    cy.financedCar('Sim')
    cy.buttonSubmit()
  })
})
