import { DimensionVO } from './DimensionVO';


export class ShowDimensionByIdResultData {
    public value?: DimensionVO;
    public constructor() { 
    }
    public withValue(value: DimensionVO): ShowDimensionByIdResultData {
        this['value'] = value;
        return this;
    }
}