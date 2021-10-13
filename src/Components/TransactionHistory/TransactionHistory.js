import PropTypes from "prop-types";

export function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return TransactionItem(item);
        })}
      </tbody>
    </table>
  );
}

function TransactionItem({ id, type, amount, currency }) {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  amount: PropTypes.string,
  name: PropTypes.string,
};
