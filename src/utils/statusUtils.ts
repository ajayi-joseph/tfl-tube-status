import type { ElementType } from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaInfoCircle,
  FaQuestionCircle,
} from "react-icons/fa";

export function getStatusClass(severity: number): string {
  switch (severity) {
    case 10:
      return "goodService";
    case 9:
    case 8:
    case 7:
    case 6:
      return "minorDelays";
    case 5:
    case 4:
    case 3:
      return "severeDelays";
    case 2:
    case 1:
    case 0:
      return "plannedClosure";
    default:
      return "unknown";
  }
}

export function getStatusIconAndColor(statusClass: string): {
  Icon: ElementType;
  color: string;
} {
  switch (statusClass) {
    case "goodService":
      return { Icon: FaCheckCircle as ElementType, color: "#2ecc40" };
    case "minorDelays":
      return { Icon: FaExclamationTriangle as ElementType, color: "#ffb700" };
    case "severeDelays":
      return { Icon: FaTimesCircle as ElementType, color: "#ff4136" };
    case "plannedClosure":
      return { Icon: FaInfoCircle as ElementType, color: "#6c757d" };
    default:
      return { Icon: FaQuestionCircle as ElementType, color: "#bdbdbd" };
  }
}
