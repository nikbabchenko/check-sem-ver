describe('ui-layout', () => {
  beforeEach(() => cy.visit('/iframe.html?id=footercomponent--primary'));
  it('should render the component', () => {
    cy.get('mmui-footer').should('exist');
  });
});
