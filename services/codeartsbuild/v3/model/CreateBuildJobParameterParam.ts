import { LimitsParam } from './LimitsParam';


export class CreateBuildJobParameterParam {
    public name?: string;
    public value?: string;
    public limits?: Array<LimitsParam>;
    public constructor() { 
    }
    public withName(name: string): CreateBuildJobParameterParam {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): CreateBuildJobParameterParam {
        this['value'] = value;
        return this;
    }
    public withLimits(limits: Array<LimitsParam>): CreateBuildJobParameterParam {
        this['limits'] = limits;
        return this;
    }
}