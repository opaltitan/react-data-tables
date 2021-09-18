import { DualAxisParams } from './models/models';
import { DataFormatter } from 'simple-text-display-formatter';

interface DisplayCell {
  displayText: string;
  class: string;
}

const DualAxisCell = ({ params }: { params: DisplayCell }): JSX.Element => {
  return (
    <div className={params.class}>
      <span>{params.displayText}</span>
    </div>
  );
};

const DualAxisRow = ({ params }: { params: Array<DisplayCell> }): JSX.Element => {
  const cells: Array<JSX.Element> = params.map((col) =>
    <DualAxisCell params={col} />
  );

  return (
    <div className="dual-axis-row">
      {cells}
    </div>
  );
};

export const DataTableDualAxis = (params: DualAxisParams): JSX.Element => {
  const blankCell: DisplayCell = {
    displayText: '',
    class: 'x-axis-header y-axis-header'
  };

  const xAxisHeaderRow: Array<DisplayCell> = [
    blankCell,
    ...params.config.fields.x.map((item) => {
      return {
        displayText: item.displayValue,
        class: `x-axis-header ${item.displayValue}`
      };
    })
  ];
  const displayData: Array<Array<DisplayCell>> = [
    xAxisHeaderRow,
    ...params.config.fields.y.map((yItem) => {
      return [
        { displayText: yItem.displayValue,
          class: `y-axis-header ${yItem.columnName}` },
        ...params.config.fields.x.map((xItem) => {
          return {
            displayText: DataFormatter.format(params.config.fields.dataDeriver(xItem, yItem, params.data), params.config.fields.dataFormat),
            class: `data ${yItem.columnName} ${xItem.columnName}`
          };
        })
      ]
    })
  ];

  const rows: Array<JSX.Element> = displayData.map(row =>
    <DualAxisRow params={row} />
  );

  return (
    <div className="data-table-dual-axis">
      {rows}
    </div>
  );
};


/*

*/

// [
//   [ { displayText: '', class: '' }, { displayText: '', class: '' } ],
//   [ { displayText: '', class: '' }, { displayText: '', class: '' } ],
// ]

