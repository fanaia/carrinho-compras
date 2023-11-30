import React from 'react';

const ItensPedido = () => {
  // Obtém o carrinho do localStorage
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  return (
    <div>
      <h1>Itens do Pedido</h1>
      <ul>
        {carrinho.map((item, index) => (
          <li key={index}>{item.nome} - R$ {item.preco}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItensPedido;
