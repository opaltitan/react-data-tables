var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneDeep } from 'lodash';
import { Buttons } from 'simple-react-buttons';
import { Expander } from 'simple-react-expander';
import { DATA_TABLE_FIELD_TYPE } from './models/models';
import { DataFormatter } from 'simple-text-display-formatter';
export var DataTableSingleAxis = function (params) {
    var dataRows = params.data.map(function (row, i) {
        var dataRow = _jsx(DataTableSingleAxisDataRow, { params: params.config, data: row }, i);
        if (params.expanderBody) {
            return _jsx(Expander.Component, __assign({ header: dataRow }, { children: params.expanderBody(row) }), i);
        }
        else {
            return dataRow;
        }
    });
    return (_jsxs("div", __assign({ className: "data-table-single-axis " + (params.expanderBody ? 'data-table-with-expander' : 'data-table-without-expander') + " " + params.config.parentClass }, { children: [_jsx(DataTableSingleAxisHeaderRow, { params: params.config }, void 0), dataRows] }), void 0));
};
var DataTableSingleAxisHeaderRow = function (_a) {
    var params = _a.params;
    return (_jsx("div", __assign({ className: "data-table-row data-table-header-row" }, { children: params.fields.map(function (param, i) {
            return _jsx(DataTableStandardCell, { columnName: param.columnName, text: param.label }, i);
        }) }), void 0));
};
var DataTableSingleAxisDataRow = function (_a) {
    var params = _a.params, data = _a.data;
    var columns = params.fields.map(function (param, i) {
        switch (param.type) {
            case DATA_TABLE_FIELD_TYPE.BUTTON:
                return (_jsx(DataTableButtonCell, { params: param, data: data }, i));
            default:
                var castParam = param;
                return (_jsx(DataTableStandardCell, { columnName: castParam.columnName, text: DataFormatter.format(data[castParam.columnName], castParam.dataFormat) }, i));
        }
    });
    return (_jsx("div", __assign({ className: "data-table-row data-table-data-row" }, { children: columns }), void 0));
};
// const DataTableSingleAxisColumn = (
//   { params, data }: { params: Input.DataTable.Config.Params, data: any }
// ): JSX.Element => {
//   let cell: JSX.Element | null = null;
//   switch (params.type) {
//     case Enums.DATA_TABLE_FIELD_TYPE.BUTTON:
//       cell = <DataTableButtonCell params={params.details} data={data} />
//       break;
//     default:
//       cell = <DataTableStandardCell params={params.details} data={data[params.details.columnName]} />
//       break;
//   }
//   return (
//     <div className="data-table-column">
//       {
//       }
//     </div>
//   );
// };
var DataTableStandardCell = function (_a) {
    var columnName = _a.columnName, text = _a.text;
    return (_jsx("div", __assign({ className: "data-table-cell data-table-standard-cell " + columnName }, { children: _jsx("span", { children: text }, void 0) }), void 0));
};
var DataTableButtonCell = function (_a) {
    var params = _a.params, data = _a.data;
    var modifiedButtonData = cloneDeep(params.buttonData);
    modifiedButtonData.buttons.forEach(function (button) {
        button.params = button.paramDeriver ? button.paramDeriver(data) : button.params;
    });
    return (_jsx("div", __assign({ className: "data-table-cell data-table-button-cell " + params.columnName }, { children: _jsx(Buttons.Component, { params: modifiedButtonData }, void 0) }), void 0));
};
