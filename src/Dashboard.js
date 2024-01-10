import React from 'react';
import { Card, Table } from 'react-bootstrap';
import './Dashboard.css';  // Importando o arquivo CSS

const Dashboard = () => {
  // Dados estáticos fictícios
  const salesData = [
    { id: 1, product: 'Planilha A', amount: 1500 },
    { id: 2, product: 'Planilha B', amount: 2000 },
    { id: 3, product: 'Planilha C', amount: 1200 },
    // Adicione mais dados conforme necessário
  ];

  return (
    <Card className="Dashboard">
      <h2>Relatórios</h2>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Planilha</th>
              <th>Grau Crítico</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.id}</td>
                <td>{sale.product}</td>
                <td>{sale.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Dashboard;
