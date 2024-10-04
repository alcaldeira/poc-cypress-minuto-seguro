describe('Simular seguro', { tags: ['@regressivo'] }, () => {
  beforeEach(() => {
    cy.visit('https://www.minutoseguros.com.br/')
  })

  it('Efetuar Simulação de seguro', { tags: ['@smoke', '@regressivo', '@checkout'] }, () => {
    cy.addVehicle('Seguro auto', 'PESQUISANDO_PARA_COMPRAR_UM_NOVO_VEICULO_V2', 'Carro', 'toyota', '2023', '2024', 'CAMRY', 'CAMRY COUPE LE 2.2 16V GASOLINA MANUAL 2P', 'É zero KM', 'Sim')
  })
})
