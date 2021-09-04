import { cloneDeep } from 'lodash';
import { Buttons } from 'simple-react-buttons';
import { Expander } from 'simple-react-expander';
import {
  DataTableParams, DataTableConfig, DataTableField,
  DataTableFieldButton, DataTableFieldText, DATA_TABLE_FIELD_TYPE
} from './models/models';
import { DataFormatter } from 'simple-text-display-formatter';

export const DataTableSingleAxis = (params: DataTableParams): JSX.Element => {
  const dataRows: Array<JSX.Element> = params.data.map((row: any, i: number) => {
    const dataRow: JSX.Element = 
      <DataTableSingleAxisDataRow key={i}
                                  params={params.config}
                                  data={row} />;
    if (params.expanderBody) {
      return <Expander.Component key={i} header={dataRow}>
               {params.expanderBody(row)}
             </Expander.Component>
    } else {
      return dataRow;
    }
  });
  return (
    <div className={`data-table-single-axis ${params.expanderBody ? 'data-table-with-expander' : 'data-table-without-expander'} ${params.config.parentClass}`}>
      <DataTableSingleAxisHeaderRow params={params.config} />
      {dataRows}
    </div>
  );
};

const DataTableSingleAxisHeaderRow = (
  { params }:
  { params: DataTableConfig }
): JSX.Element => {
  return (
    <div className="data-table-row data-table-header-row">
      {params.fields.map((param: DataTableField, i: number) =>
        <DataTableStandardCell key={i}
                               columnName={param.columnName}
                               text={param.label} />
      )}
    </div>
  );
};

const DataTableSingleAxisDataRow = (
  { params, data }:
  { params: DataTableConfig, data: any }
): JSX.Element => {
  const columns = params.fields.map(
    (param: DataTableField, i: number) => {
      switch(param.type) {
        case DATA_TABLE_FIELD_TYPE.BUTTON:
          return (
            <DataTableButtonCell key={i}
                                 params={param as DataTableFieldButton}
                                 data={data}/>
          );
        default:
          const castParam = param as DataTableFieldText;
          return (
            <DataTableStandardCell key={i}
                                   columnName={castParam.columnName}
                                   text={DataFormatter.format(data[castParam.columnName], castParam.dataFormat)} />
          );
      }
    }
  );
  return (
    <div className="data-table-row data-table-data-row">
      {columns}
    </div>
  );
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

const DataTableStandardCell = (
  { columnName, text }:
  { columnName: string, text: string | number | Date }
): JSX.Element => {
  return (
    <div className={`data-table-cell data-table-standard-cell ${columnName}`}>
      <span>{text}</span>
    </div>
  );
};

const DataTableButtonCell = (
  { params, data }:
  { params: DataTableFieldButton, data: any }
): JSX.Element => {
  const modifiedButtonData: Buttons.Params = cloneDeep(params.buttonData);
  modifiedButtonData.buttons.forEach(button => {
    button.params = button.paramDeriver ? button.paramDeriver(data) : button.params;
  });

  return (
    <div className={`data-table-cell data-table-button-cell ${params.columnName}`}>
      <Buttons.Component params={modifiedButtonData} />
    </div>
  );
};
