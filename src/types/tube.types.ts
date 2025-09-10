export interface LineStatus {
  $type: string;
  id: number;
  statusSeverity: number;
  statusSeverityDescription: string;
  reason?: string;
  created: string;
  validityPeriods: ValidityPeriod[];
  disruption?: Disruption;
}

export interface ServiceType {
  $type: string;
  name: string;
  uri: string;
}

export interface Crowding {
  $type: string;
}

export interface TubeLine {
  $type: string;
  id: string;
  name: string;
  modeName: string;
  lineStatuses: LineStatus[];
  disruptions: any[];
  created: string;
  modified: string;
  serviceTypes: ServiceType[];
  crowding: Crowding;
  routeSections: any[];
}

export interface ValidityPeriod {
  fromDate: string;
  toDate: string;
  isNow: boolean;
}

export interface Disruption {
  category: string;
  categoryDescription: string;
  description: string;
  closureText?: string;
}
