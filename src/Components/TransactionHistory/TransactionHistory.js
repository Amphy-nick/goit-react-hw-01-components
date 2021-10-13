import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

export function TransactionHistory({ items }) {
  return (
    <table className={s.TransactionHistory}>
      <thead className={s.tableHead}>
        <tr className={s.tableRow}>
          <th className={s.tableHeader}>Type</th>
          <th className={s.tableHeader}>Amount</th>
          <th className={s.tableHeader}>Currency</th>
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
    <tr className={s.tableRow} key={id}>
      <td className={s.tableData}>{type}</td>
      <td className={s.tableData}>{amount}</td>
      <td className={s.tableData}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  amount: PropTypes.string,
  name: PropTypes.string,
};
