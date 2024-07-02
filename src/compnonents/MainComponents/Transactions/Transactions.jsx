import React, { useState } from "react";
import "./Transactions.css";
import { Pagination } from "antd";

function Transactions() {
  const transactions = [{ 
    date: '2024-06-01', 
    txnId: 'TXN001', 
    accountId: 'ACC001', 
    amount: 100, 
    txnType: 'Debit', 
    status: 'Completed', 
    availBalance: 500 
  },
  { 
    date: '2024-06-02', 
    txnId: 'TXN002', 
    accountId: 'ACC002', 
    amount: 200, 
    txnType: 'Credit', 
    status: 'Completed', 
    availBalance: 700 
  },
  { 
    date: '2024-06-03', 
    txnId: 'TXN003', 
    accountId: 'ACC001', 
    amount: 150, 
    txnType: 'Debit', 
    status: 'Pending', 
    availBalance: 550 
  },
  { 
    date: '2024-06-04', 
    txnId: 'TXN004', 
    accountId: 'ACC002', 
    amount: 300, 
    txnType: 'Credit', 
    status: 'Completed', 
    availBalance: 850 
  },
  { 
    date: '2024-06-04', 
    txnId: 'TXN004', 
    accountId: 'ACC002', 
    amount: 300, 
    txnType: 'Credit', 
    status: 'Completed', 
    availBalance: 850 
  },{ 
    date: '2024-06-04', 
    txnId: 'TXN004', 
    accountId: 'ACC002', 
    amount: 300, 
    txnType: 'Credit', 
    status: 'Completed', 
    availBalance: 850 
  },{ 
    date: '2024-06-04', 
    txnId: 'TXN004', 
    accountId: 'ACC002', 
    amount: 300, 
    txnType: 'Credit', 
    status: 'Completed', 
    availBalance: 850 
  },{ 
    date: '2024-06-04', 
    txnId: 'TXN004', 
    accountId: 'ACC002', 
    amount: 300, 
    txnType: 'Credit', 
    status: 'Completed', 
    availBalance: 850 
  },{ 
    date: '2024-06-04', 
    txnId: 'TXN004', 
    accountId: 'ACC002', 
    amount: 300, 
    txnType: 'Credit', 
    status: 'Completed', 
    availBalance: 850 
  },{ 
    date: '2024-06-04', 
    txnId: 'TXN004', 
    accountId: 'ACC002', 
    amount: 300, 
    txnType: 'Credit', 
    status: 'Completed', 
    availBalance: 850 
  },{ 
    date: '2024-06-04', 
    txnId: 'TXN004', 
    accountId: 'ACC002', 
    amount: 300, 
    txnType: 'Credit', 
    status: 'Completed', 
    availBalance: 850 
  },{ 
    date: '2024-06-04', 
    txnId: 'TXN004', 
    accountId: 'ACC002', 
    amount: 300, 
    txnType: 'Credit', 
    status: 'Completed', 
    availBalance: 850 
  },{ 
    date: '2024-06-04', 
    txnId: 'TXN004', 
    accountId: 'ACC002', 
    amount: 300, 
    txnType: 'Credit', 
    status: 'Completed', 
    availBalance: 850 
  },{ 
    date: '2024-06-04', 
    txnId: 'TXN004', 
    accountId: 'ACC002', 
    amount: 300, 
    txnType: 'Credit', 
    status: 'Completed', 
    availBalance: 850 
  },
  // Add more transactions as needed
];
  

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 8;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="transactions-container">
      <hr className="horizontal-line" />
      <div className="table-container">
      <table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Transaction ID</th>
      <th>Account ID</th>
      <th>Debit/Credit</th>
      <th>Amount</th>
      <th>Status</th>
      <th>Available Balance</th>
    </tr>
  </thead>
  <tbody>
    {currentTransactions.length > 0 ? (
      currentTransactions.map((transaction, index) => (
        <tr key={index}>
          <td>{transaction.date}</td>
          <td>{transaction.txnId}</td>
          <td>{transaction.accountId}</td>
          <td>{transaction.txnType}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.status}</td>
          <td>{transaction.availBalance}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="7" className="no-transactions">
          No transactions yet
        </td>
      </tr>
    )}
  </tbody>
</table>

      <Pagination
        className="pagination"
        current={currentPage}
        pageSize={transactionsPerPage}
        total={transactions.length}
        onChange={handleChangePage}
      />
      </div>
    </div>
  );
}

export default Transactions;
