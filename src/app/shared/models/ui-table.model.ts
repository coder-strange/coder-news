import { ActionButton } from './action-button.model';

export interface TableConfig {
  columns: ColumnDef[];
  dataSet: any;
  config?: any;
  handlers?: ActionButton[];
  edit?: boolean;
  isRowClickable?: boolean;
}

export interface ColumnDef {
  name: string;
  field: string;
  type?: 'input' | 'select' | 'custom' | 'handler' | 'date';
  editable?: boolean;
  colStyle?: any;
  sticky?: boolean;
  hide?: boolean;
  options?: TableSelectOptions[];
  optionValueField?:string;
}

export interface TableSelectOptions{
  title: string;
  value: any;
  displayField?:string;
}

export interface TableRowUpdateEvent{
  data: any;
  index: number;
}

export interface TableRowClickEvent extends TableRowUpdateEvent{

}
