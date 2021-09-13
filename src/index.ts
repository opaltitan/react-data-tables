import { DataFormatter } from 'simple-text-display-formatter';
import { DATA_TABLE_FIELD_TYPE, DataTableParams, DataTableConfig, DataTableField } from './models/models';
import { DataTableSingleAxis } from './SingleAxis';

export namespace SingleAxis {
  export const Component = DataTableSingleAxis;

  export interface Params extends DataTableParams {}
  export interface Config extends DataTableConfig {}
  export type Field = DataTableField;
}


export namespace DataTableEnums {
  export type FORMAT_TYPE = DataFormatter.FORMAT_TYPE;
  export type FIELD_TYPE = DATA_TABLE_FIELD_TYPE;
}