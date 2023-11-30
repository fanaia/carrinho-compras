import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdicionarItem from './AdicionarItem';
import ItensPedido from './ItensPedido';

const App = () => {
  const [itensCarrinho, setItensCarrinho] = useState([]);

  const adicionarItemAoCarrinho = (codigoProduto) => {
    // Simulação: Consulta do código do produto na base de dados
    const produto = {
      codigo: codigoProduto,
      nome: `Produto ${codigoProduto}`,
      preco: 20.0,
    };

    // Adiciona o produto ao carrinho
    setItensCarrinho([...itensCarrinho, produto]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/adicionar-item/:codigoProduto"
          element={<AdicionarItem adicionarItemAoCarrinho={adicionarItemAoCarrinho} />}
        />
        <Route path="/itens-pedido" element={<ItensPedido itensCarrinho={itensCarrinho} />} />
      </Routes>
    </Router>
  );
};

export default App;
