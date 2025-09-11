import { render, screen, within } from "@testing-library/react";
import TubeStatusSummary from "./TubeStatusSummary";
import { TubeLine } from "../../types/tube.types";

describe("TubeStatusSummary", () => {
  const mockLines: TubeLine[] = [
    // Good Service
    { id: "1", name: "Line 1", lineStatuses: [{ statusSeverity: 10 }] } as TubeLine,
    { id: "2", name: "Line 2", lineStatuses: [{ statusSeverity: 9 }] } as TubeLine,
    // Minor Delays
    { id: "3", name: "Line 3", lineStatuses: [{ statusSeverity: 8 }] } as TubeLine,
    // Severe Delays
    { id: "4", name: "Line 4", lineStatuses: [{ statusSeverity: 5 }] } as TubeLine,
    // Planned Closure
    { id: "5", name: "Line 5", lineStatuses: [{ statusSeverity: 2 }] } as TubeLine,
    // Unknown
    { id: "6", name: "Line 6", lineStatuses: [{ statusSeverity: 99 }] } as TubeLine,
  ];

  it("renders correct counts for each status", () => {
    render(<TubeStatusSummary lines={mockLines} />);

  // Good Service: 1
  const goodService = screen.getByText(/Good Service/i).closest(".summaryItem");
  expect(goodService).toBeTruthy();
  expect(within(goodService as HTMLElement).getByText("1")).toBeInTheDocument();

  // Minor Delays: 2
  const minorDelays = screen.getByText(/Minor Delays/i).closest(".summaryItem");
  expect(minorDelays).toBeTruthy();
  expect(within(minorDelays as HTMLElement).getByText("2")).toBeInTheDocument();

    // Severe Delays: 1
    const severeDelays = screen.getByText(/Severe Delays/i).closest(".summaryItem");
    expect(severeDelays).toBeTruthy();
  expect(within(severeDelays as HTMLElement).getByText("1")).toBeInTheDocument();

    // Planned Closure: 1
    const plannedClosure = screen.getByText(/Planned Closure/i).closest(".summaryItem");
    expect(plannedClosure).toBeTruthy();
  expect(within(plannedClosure as HTMLElement).getByText("1")).toBeInTheDocument();

    // Unknown: 1
    const unknown = screen.getByText(/Unknown/i).closest(".summaryItem");
    expect(unknown).toBeTruthy();
  expect(within(unknown as HTMLElement).getByText("1")).toBeInTheDocument();
  });

  it("renders all status labels", () => {
    render(<TubeStatusSummary lines={mockLines} />);
    expect(screen.getByText(/Good Service/i)).toBeInTheDocument();
    expect(screen.getByText(/Minor Delays/i)).toBeInTheDocument();
    expect(screen.getByText(/Severe Delays/i)).toBeInTheDocument();
    expect(screen.getByText(/Planned Closure/i)).toBeInTheDocument();
    expect(screen.getByText(/Unknown/i)).toBeInTheDocument();
  });

  it("renders 0 for missing statuses", () => {
    render(<TubeStatusSummary lines={[]} />);
    expect(screen.getAllByText("0").length).toBeGreaterThan(0);
  });
});
