import { FactLogicTableVO } from './FactLogicTableVO';


export class ShowFactLogicTableByIdResultData {
    public value?: FactLogicTableVO;
    public constructor() { 
    }
    public withValue(value: FactLogicTableVO): ShowFactLogicTableByIdResultData {
        this['value'] = value;
        return this;
    }
}