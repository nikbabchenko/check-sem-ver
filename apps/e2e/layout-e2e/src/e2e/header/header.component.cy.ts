describe('ui-layout', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary'));
  it('should render the component', () => {
    cy.get('mmui-header').should('exist');
  });
});
