import { DataFormatter } from 'simple-text-display-formatter';
import { DATA_TABLE_FIELD_TYPE, DataTableParams, DataTableConfig } from './models/models';
import { DataTableSingleAxis } from './SingleAxis';

export namespace DataTable {
  export namespace SingleAxis {
    export const Component = DataTableSingleAxis;

    export interface Params extends DataTableParams {}
    export interface Config extends DataTableConfig {}
  }

  export namespace Enums {
    export type FORMAT_TYPE = DataFormatter.FORMAT_TYPE;
    export type FIELD_TYPE = DATA_TABLE_FIELD_TYPE;
  }
}
