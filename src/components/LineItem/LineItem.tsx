import { memo } from "react";
import { TubeLine } from "../../types/tube.types";
import { getStatusClass, getStatusIconAndColor } from "../../utils/statusUtils";
import styles from "./LineItem.module.css";

interface LineItemProps {
  line: TubeLine;
}

function LineItem({ line }: LineItemProps) {
  const currentStatus = line.lineStatuses[0];

  const statusClass = getStatusClass(currentStatus.statusSeverity);

  const { Icon, color: iconColor } = getStatusIconAndColor(statusClass);

  return (
    <article
      role="status"
      aria-live="polite"
      aria-label={`${line.name} line status`}
      className={styles.lineItem}
      data-testid="line-item"
    >
      <h2 className={styles.lineName}>{line.name}</h2>
      <div
        className={`${styles.status} ${styles[statusClass]}`}
        role="status"
        aria-label={`Status: ${currentStatus.statusSeverityDescription}`}
      >
        <Icon
          className={styles.statusIcon}
          aria-hidden={true}
          data-testid="status-icon"
          style={{ color: iconColor }}
        />
        <span className="visually-hidden">Status:</span>
        {currentStatus.statusSeverityDescription}
      </div>
      {currentStatus.reason && (
        <p className={styles.reason} role="alert">
          {currentStatus.reason}
        </p>
      )}
    </article>
  );
}

export default memo(LineItem);
