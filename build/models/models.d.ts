/// <reference types="react" />
import { Buttons } from 'simple-react-buttons';
import { DataFormatter } from 'simple-text-display-formatter';
export declare enum DATA_TABLE_FIELD_TYPE {
    TEXT = 0,
    BUTTON = 1
}
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
export declare type DataTableField = DataTableFieldText | DataTableFieldButton;
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
    value: string;
}
export interface DualAxisConfig {
    parentClass: string;
    fields: {
        x: Array<AxisItem>;
        y: Array<AxisItem>;
        dataDeriver: (x: AxisItem, y: AxisItem, data: Array<any>) => string | Date | number;
        dataFormat: DataFormatter.DISPLAY_FORMAT_TYPE;
    };
}
export interface DualAxisParams {
    data: Array<any>;
    config: DualAxisConfig;
    expanderBody?: (params: any) => JSX.Element;
}
export {};
