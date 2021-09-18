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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { DataFormatter } from 'simple-text-display-formatter';
var DualAxisCell = function (_a) {
    var params = _a.params;
    return (_jsx("div", __assign({ className: params.class }, { children: _jsx("span", { children: params.displayText }, void 0) }), void 0));
};
var DualAxisRow = function (_a) {
    var params = _a.params;
    var cells = params.map(function (col) {
        return _jsx(DualAxisCell, { params: col }, void 0);
    });
    return (_jsx("div", __assign({ className: "dual-axis-row" }, { children: cells }), void 0));
};
export var DataTableDualAxis = function (params) {
    var blankCell = {
        displayText: '',
        class: 'x-axis-header y-axis-header'
    };
    var xAxisHeaderRow = __spreadArray([
        blankCell
    ], params.config.fields.x.map(function (item) {
        return {
            displayText: item.displayValue,
            class: "x-axis-header " + item.displayValue
        };
    }));
    var displayData = __spreadArray([
        xAxisHeaderRow
    ], params.config.fields.y.map(function (yItem) {
        return __spreadArray([
            { displayText: yItem.displayValue,
                class: "y-axis-header " + yItem.columnName }
        ], params.config.fields.x.map(function (xItem) {
            return {
                displayText: DataFormatter.format(params.config.fields.dataDeriver(xItem, yItem, params.data), params.config.fields.dataFormat),
                class: "data " + yItem.columnName + " " + xItem.columnName
            };
        }));
    }));
    var rows = displayData.map(function (row) {
        return _jsx(DualAxisRow, { params: row }, void 0);
    });
    return (_jsx("div", __assign({ className: "data-table-dual-axis" }, { children: rows }), void 0));
};
