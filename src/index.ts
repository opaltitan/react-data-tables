import { DataFormatter } from 'simple-text-display-formatter';
import { DATA_TABLE_FIELD_TYPE, DataTableParams, DataTableConfig, DataTableField, DualAxisParams, DualAxisConfig, AxisItem } from './models/models';
import { DataTableSingleAxis } from './SingleAxis';
import { DataTableDualAxis } from './DualAxis';

export namespace SingleAxis {
  export const Component = DataTableSingleAxis;

  export interface Params extends DataTableParams {}
  export interface Config extends DataTableConfig {}
  export type Field = DataTableField;
}

export namespace DualAxis {
  export const Component = DataTableDualAxis;

  export interface Params extends DualAxisParams {}
  export interface Config extends DualAxisConfig {}
  export type Field = AxisItem;
}

export namespace DataTableEnums {
  export type FORMAT_TYPE = DataFormatter.DISPLAY_FORMAT_TYPE;
  export type FIELD_TYPE = DATA_TABLE_FIELD_TYPE;
}