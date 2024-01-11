import { ParameterInfo } from './ParameterInfo';


export class ModifyParameterReq {
    public values?: Array<ParameterInfo>;
    public constructor(values?: Array<ParameterInfo>) { 
        this['values'] = values;
    }
    public withValues(values: Array<ParameterInfo>): ModifyParameterReq {
        this['values'] = values;
        return this;
    }
}