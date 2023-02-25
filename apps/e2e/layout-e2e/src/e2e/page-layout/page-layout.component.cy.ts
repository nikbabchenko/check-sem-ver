describe('ui-layout', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pagelayoutcomponent--primary'));
  it('should render the component', () => {
    cy.get('mmui-page-layout').should('exist');
  });
});
