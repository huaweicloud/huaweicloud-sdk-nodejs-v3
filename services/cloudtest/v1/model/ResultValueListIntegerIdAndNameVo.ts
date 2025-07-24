import { IntegerIdAndNameVo } from './IntegerIdAndNameVo';


export class ResultValueListIntegerIdAndNameVo {
    public value?: Array<IntegerIdAndNameVo>;
    public constructor() { 
    }
    public withValue(value: Array<IntegerIdAndNameVo>): ResultValueListIntegerIdAndNameVo {
        this['value'] = value;
        return this;
    }
}