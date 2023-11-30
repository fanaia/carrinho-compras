import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AdicionarItem = () => {
  const navigate = useNavigate();
  const { codigoProduto } = useParams();

  useEffect(() => {
    // Simulação: Leitura de QRCode e adição ao carrinho
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
    const novoItem = { codigo: codigoProduto, nome: `Produto ${codigoProduto}`, preco: 20.0 };
    const novoCarrinho = [...carrinhoAtual, novoItem];

    // Atualiza o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));

    // Redireciona para a página de itens do pedido
    navigate('/itens-pedido');
  }, [codigoProduto, navigate]);

  return (
    <div>
      <h1>Adicionando Item ao Carrinho...</h1>
      {/* Pode adicionar uma mensagem ou loader aqui */}
    </div>
  );
};

export default AdicionarItem;
