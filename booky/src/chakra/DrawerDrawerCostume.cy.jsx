import React from 'react'
import { DrawerCostume } from './Drawer'
import { DrawerContext, DrawerProvider, useCostumeDrawerContext } from '../context/drawer.context'
import { BrowserRouter, RouterProvider } from 'react-router-dom'

describe('<DrawerCostume />', () => {

    beforeEach(()=>{
        const mocks = {
            isOpen: true,
            setOpen: cy.stub().as("setOpen")
        }
        cy.mount(
            <DrawerContext.Provider value={mocks}>
                <BrowserRouter>
                    <DrawerCostume />
                </BrowserRouter >
            </DrawerContext.Provider>)
          })

  it("check text", ()=>{
    cy.get('[data-cy=drawer-item]').should("contain.text", "show books");
  });
  it("check the close button", ()=>{
    cy.get('[data-cy=close-drawer]').click();
    cy.get('@setOpen').should("have.been.called");
  });
});
