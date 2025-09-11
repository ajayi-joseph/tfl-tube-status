import { render, screen } from "@testing-library/react";
import LineItem from "./LineItem";
import { TubeLine } from "../../types/tube.types";

describe("LineItem", () => {
	const baseLine: TubeLine = {
		$type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
		id: "bakerloo",
		name: "Bakerloo",
		modeName: "tube",
		lineStatuses: [
			{
				$type: "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
				id: 0,
				statusSeverity: 10,
				statusSeverityDescription: "Good Service",
				created: new Date().toISOString(),
				validityPeriods: [],
			},
		],
		disruptions: [],
		created: new Date().toISOString(),
		modified: new Date().toISOString(),
		serviceTypes: [],
		crowding: { $type: "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities" },
		routeSections: [],
	};

	it("renders line name and good service status", () => {
		render(<LineItem line={baseLine} />);
		expect(screen.getByText("Bakerloo")).toBeInTheDocument();
		expect(screen.getByText("Good Service")).toBeInTheDocument();
	});

	it("displays disruption reason when present", () => {
		const lineWithReason = {
			...baseLine,
			name: "Circle",
			id: "circle",
			lineStatuses: [
				{
					...baseLine.lineStatuses[0],
					statusSeverity: 4,
					statusSeverityDescription: "Planned Closure",
					reason: "Engineering works",
				},
			],
		};
		render(<LineItem line={lineWithReason} />);
		expect(screen.getByText("Engineering works")).toBeInTheDocument();
	});
});
