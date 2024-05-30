import { StandElementFieldVO } from './StandElementFieldVO';


export class InitializeStandardTemplateResultData {
    public value?: Array<StandElementFieldVO>;
    public constructor() { 
    }
    public withValue(value: Array<StandElementFieldVO>): InitializeStandardTemplateResultData {
        this['value'] = value;
        return this;
    }
}