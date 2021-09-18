/// <reference types="react" />
import { DataFormatter } from 'simple-text-display-formatter';
import { DATA_TABLE_FIELD_TYPE, DataTableParams, DataTableConfig, DataTableField, DualAxisParams, DualAxisConfig, AxisItem } from './models/models';
export declare namespace SingleAxis {
    const Component: (params: DataTableParams) => JSX.Element;
    interface Params extends DataTableParams {
    }
    interface Config extends DataTableConfig {
    }
    type Field = DataTableField;
}
export declare namespace DualAxis {
    const Component: (params: DualAxisParams) => JSX.Element;
    interface Params extends DualAxisParams {
    }
    interface Config extends DualAxisConfig {
    }
    type Field = AxisItem;
}
export declare namespace DataTableEnums {
    type FORMAT_TYPE = DataFormatter.DISPLAY_FORMAT_TYPE;
    type FIELD_TYPE = DATA_TABLE_FIELD_TYPE;
}
