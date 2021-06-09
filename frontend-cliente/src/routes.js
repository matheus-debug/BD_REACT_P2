import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import MainCliente from './pages/cliente/main';
import DetalhesCliente from './pages/cliente/detalhes';
import CriarCliente from './pages/cliente/criar';
 
const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/clientes" component={MainCliente} />
            <Route path="/clientes/:id" component={DetalhesCliente} />
            <Route path="/criarCliente" component={CriarCliente} />
        </Switch>
    </BrowserRouter>
)
 
export default Routes;
