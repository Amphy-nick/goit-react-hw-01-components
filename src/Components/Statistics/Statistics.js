import PropTypes from "prop-types";

export function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {stats.map((data) => {
          return (
            <li className="item" key={data.id}>
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
