import React from 'react'
import { Book } from './Book'
import { BrowserRouter } from 'react-router-dom'

describe('<Book />', () => {
  before('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BrowserRouter>
        <Book id={1} title="book title"/>
    </BrowserRouter>)
  });
  it("check the title of book component", ()=>{
    cy.get('[data-cy=title]').should("contain.text", "book title");
  });
})
