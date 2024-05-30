import { ConditionVO } from './ConditionVO';


export class ShowConditionByIdResultData {
    public value?: ConditionVO;
    public constructor() { 
    }
    public withValue(value: ConditionVO): ShowConditionByIdResultData {
        this['value'] = value;
        return this;
    }
}