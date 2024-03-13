import React from 'react';
import { Card, Table } from 'react-bootstrap';
import './Dashboard.css';  // Importando o arquivo CSS

const Dashboard = () => {
  // Dados estáticos fictícios para a primeira tabela
  const salesData = [
    { id: 1, product: 'Planilha A', amount: 1500 },
    { id: 2, product: 'Planilha B', amount: 2000 },
    { id: 3, product: 'Planilha C', amount: 1200 },
    // Adicione mais dados conforme necessário
  ];

  // Dados estáticos fictícios para a segunda tabela
  const otherData = [
    { id: 1, item: 'Item 1', quantity: 5 },
    { id: 2, item: 'Item 2', quantity: 10 },
    { id: 3, item: 'Item 3', quantity: 8 },
    // Adicione mais dados conforme necessário
  ];

  return (
    <div>
      <h2>Planilha #01</h2>
      <p>Resultado: Certifica sem Pendências</p>
      <h3>Indicadores</h3>
      {/* separador */}
      <hr className="Separator" />
      <Card className="Dashboard">
        <Card.Body>
          <Table striped bordered hover>
          <thead>
              <tr>
                <th>COD</th>
                <th>Indicadores</th>
                <th>Soma de Grau Crítico</th>
              </tr>
            </thead>
            <tbody>
              {otherData.map((data) => (
                <tr key={data.id}>
                  <td>{data.item}</td>
                  <td>{data.id}</td>
                  <td>{data.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <h3>Feedback Geral</h3>
      {/* separador */}
      <hr className="Separator" />
      <div className="NewLine"></div>
      <h4>Destaques Positivos</h4>
      <div className="InputContainer">
        <input type="text" placeholder="lista de comentários de pontos fortes" />
      </div>
      <h4>Destaques Negativos</h4>
      <div className="InputContainer">
        <input type="text" placeholder="lista de comentários de pontos fracos" />
      </div>
      <h3> Análise de Resultados</h3>
      {/* separador */}
      <hr className="Separator" /> 
      <Card className="Dashboard">
        <Card.Body>
          <Table striped bordered hover>
          <thead>
              <tr>
                <th>Resultado</th>
                <th>COD</th>
                <th>Indicadores</th>
                <th>Grau Crítico</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale) => (
                <tr key={sale.id}>
                  <td>{sale.product}</td>
                  <td>{sale.id}</td>
                  <td>{sale.product}</td>
                  <td>{sale.amount}</td>
                </tr>
              ))}
            </tbody>            
          </Table>
        </Card.Body>
      </Card>
      <Card className="Dashboard">
        <Card.Body>
          <Table striped bordered hover>
          <thead>
              <tr>
                <th>RESULTADO</th>
                <th>Contagem de COD</th>
                <th>%</th>
              </tr>
            </thead>
            <tbody>
              {otherData.map((data) => (
                <tr key={data.id}>
                  <td>{data.item}</td>
                  <td>{data.id}</td>
                  <td>{data.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dashboard;
