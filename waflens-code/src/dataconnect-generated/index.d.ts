import { ConnectorConfig } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AppSubscription_Key {
  SubscriptionID: UUIDString;
  __typename?: 'AppSubscription_Key';
}

export interface Metric_Key {
  MetricID: string;
  __typename?: 'Metric_Key';
}

export interface Migration_Key {
  MigrationID: UUIDString;
  __typename?: 'Migration_Key';
}

export interface ResourceControlStatus_Key {
  StatusID: UUIDString;
  __typename?: 'ResourceControlStatus_Key';
}

export interface ResourceGroup_Key {
  ResourceGroupID: UUIDString;
  __typename?: 'ResourceGroup_Key';
}

export interface Resource_Key {
  ResourceID: UUIDString;
  __typename?: 'Resource_Key';
}

export interface WAFControl_Key {
  ControlID: UUIDString;
  __typename?: 'WAFControl_Key';
}

export interface WAFPillar_Key {
  PillarID: number;
  __typename?: 'WAFPillar_Key';
}

