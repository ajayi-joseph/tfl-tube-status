import { useTubeStatus } from "../../hooks/useTubeStatus";
import { getStatusClass, getStatusIconAndColor } from "../../utils/statusUtils";
import styles from "./TubeStatus.module.css";
import { TubeLine } from "../../types/tube.types";

const statusOrder = [
  "goodService",
  "minorDelays",
  "severeDelays",
  "plannedClosure",
  "unknown"
];

const statusLabels: Record<string, string> = {
  goodService: "Good Service",
  minorDelays: "Minor Delays",
  severeDelays: "Severe Delays",
  plannedClosure: "Planned Closure",
  unknown: "Unknown"
};

const TubeStatusSummary = ({ lines }: { lines: TubeLine[] }) => {
  const counts: Record<string, number> = {};
  lines.forEach(line => {
    const status = getStatusClass(line.lineStatuses?.[0]?.statusSeverity ?? -1);
    counts[status] = (counts[status] || 0) + 1;
  });

  return (
    <div className={styles.summaryBar}>
      {statusOrder.map(status => {
        const { Icon, color } = getStatusIconAndColor(status);
        return (
          <span key={status} className={styles.summaryItem}>
            <Icon style={{ color, verticalAlign: "middle", marginRight: 4 }} aria-label={statusLabels[status]} />
            <span className={styles.summaryCount}>{counts[status] || 0}</span>
            <span className={styles.summaryLabel}>{statusLabels[status]}</span>
          </span>
        );
      })}
    </div>
  );
};

export default TubeStatusSummary;
