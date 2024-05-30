import { TableModelVO } from './TableModelVO';


export class CreateTableModelResultData {
    public value?: TableModelVO;
    public constructor() { 
    }
    public withValue(value: TableModelVO): CreateTableModelResultData {
        this['value'] = value;
        return this;
    }
}