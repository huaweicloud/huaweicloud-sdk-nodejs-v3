import { CustomizedFieldsVO } from './CustomizedFieldsVO';


export class ModifyCustomizedFieldsResultData {
    public value?: Array<CustomizedFieldsVO>;
    public constructor() { 
    }
    public withValue(value: Array<CustomizedFieldsVO>): ModifyCustomizedFieldsResultData {
        this['value'] = value;
        return this;
    }
}