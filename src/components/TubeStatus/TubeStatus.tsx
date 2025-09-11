import { useTubeStatus } from "../../hooks/useTubeStatus";
import LineItem from "../LineItem/LineItem";
import TubeStatusSummary from "./TubeStatusSummary";
import styles from "./TubeStatus.module.css";
import { TubeLine } from "../../types/tube.types";

const TubeStatus = () => {
  const { data, dataUpdatedAt } = useTubeStatus();
  const lines = data as TubeLine[];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>London Underground Status</h1>
      <p className={styles.lastUpdated}>
        Last updated: {dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleTimeString() : "-"}
      </p>
      {lines && <TubeStatusSummary lines={lines} />}
      <ul
        className={styles.grid}
        data-testid="tube-grid"
        aria-label="Tube lines status list"
      >
        {lines?.map((line) => (
          <li key={line.id} className={styles.gridItem}>
            <LineItem line={line} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TubeStatus;
