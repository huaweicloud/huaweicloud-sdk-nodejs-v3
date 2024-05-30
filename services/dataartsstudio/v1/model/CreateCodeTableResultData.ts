import { CodeTableVO } from './CodeTableVO';


export class CreateCodeTableResultData {
    public value?: CodeTableVO;
    public constructor() { 
    }
    public withValue(value: CodeTableVO): CreateCodeTableResultData {
        this['value'] = value;
        return this;
    }
}