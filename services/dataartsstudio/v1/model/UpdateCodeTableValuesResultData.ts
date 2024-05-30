import { CodeTableFieldVO } from './CodeTableFieldVO';


export class UpdateCodeTableValuesResultData {
    public value?: Array<CodeTableFieldVO>;
    public constructor() { 
    }
    public withValue(value: Array<CodeTableFieldVO>): UpdateCodeTableValuesResultData {
        this['value'] = value;
        return this;
    }
}