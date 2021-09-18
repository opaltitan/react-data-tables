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
  dataFormat: DataFormatter.DISPLAY_FORMAT_TYPE;
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

export interface AxisItem {
  columnName: string;
  displayValue: string;
  rawValue: string | Date | number;
}

// export interface DualAxisField {
//   name: string;
//   label: string;
//   deriver: (row: any) => string;
//   dataFormat: DataFormatter.DISPLAY_FORMAT_TYPE;
// }

export interface DualAxisConfig {
  parentClass: string;
  // dataFormatter: (row: Object, allData: Array<any>) => Object
  fields: {
    x: Array<AxisItem>;
    y: Array<AxisItem>;
    dataDeriver: (x: AxisItem, y: AxisItem, data: Array<any>) => string | Date | number;
    dataFormat: DataFormatter.DISPLAY_FORMAT_TYPE;
  }
}

/*
  {
    parentClass: 'financial-ratios',
    fields: {
      x: { name: 'date_ending', label: 'Date Ending', deriver: (row: any) => row.date_ending, dataFormat: DataFormatter.DISPLAY_FORMAT_TYPE.DATE },
      y: { name: 'ratio', label: 'Line Item },
      display: (row: Object) => { return }
    }
  }
*/

/*
  [ { line_item_name: 'ratio1', line_item_label: 'Ratio 1',  } ]
*/

export interface DualAxisParams {
  data: Array<any>;
  config: DualAxisConfig;
  expanderBody?: (params: any) => JSX.Element;
}
