import { StandElementFieldVO } from './StandElementFieldVO';


export class CreateStandardTemplateResultData {
    public value?: StandElementFieldVO;
    public constructor() { 
    }
    public withValue(value: StandElementFieldVO): CreateStandardTemplateResultData {
        this['value'] = value;
        return this;
    }
}