import { DimensionLogicTableVO } from './DimensionLogicTableVO';


export class ShowDimensionLogicTableByIdResultData {
    public value?: DimensionLogicTableVO;
    public constructor() { 
    }
    public withValue(value: DimensionLogicTableVO): ShowDimensionLogicTableByIdResultData {
        this['value'] = value;
        return this;
    }
}