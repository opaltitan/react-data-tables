/// <reference types="react" />
import { DataFormatter } from 'simple-text-display-formatter';
import { DATA_TABLE_FIELD_TYPE, DataTableParams, DataTableConfig } from './models/models';
export declare namespace SingleAxis {
    const Component: (params: DataTableParams) => JSX.Element;
    interface Params extends DataTableParams {
    }
    interface Config extends DataTableConfig {
    }
}
export declare namespace DataTableEnums {
    type FORMAT_TYPE = DataFormatter.FORMAT_TYPE;
    type FIELD_TYPE = DATA_TABLE_FIELD_TYPE;
}
