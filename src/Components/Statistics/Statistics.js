import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}

      <ul className={s.statList}>
        {stats.map((data) => {
          return (
            <li className={s.statItem} key={data.id}>
              <span className={s.label}>{data.label}</span>
              <span className={s.percentage}>{data.percentage}%</span>
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
