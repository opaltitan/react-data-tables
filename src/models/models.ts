import { Buttons } from 'simple-react-buttons';
import { DataFormatter } from 'simple-text-display-formatter';

export enum DATA_TABLE_FIELD_TYPE {
  TEXT,
  BUTTON
}

// export enum DATA_TABLE_FORMAT_TYPE {
//   TEXT,
//   DATE,
//   NUMBER,
//   DOLLAR,
//   PERCENT
// }

interface DataTableFieldBase {
  type: DATA_TABLE_FIELD_TYPE;
  label: string;
  columnName: string;
}

export interface DataTableFieldText extends DataTableFieldBase {
  dataFormat: DataFormatter.FORMAT_TYPE;
}

export interface DataTableFieldButton extends DataTableFieldBase {
  buttonData: Buttons.Params;
}

export type DataTableField = DataTableFieldText | DataTableFieldButton;

export interface DataTableConfig {
  parentClass: string;
  fields: Array<DataTableField>;
}

export interface DataTableParams {
  data: Array<any>;
  config: DataTableConfig;
  expanderBody?: (params: any) => JSX.Element;
}
