import { LimitsParam } from './LimitsParam';


export class UpdateBuildJobParameterParam {
    public name?: string;
    public value?: string;
    public limits?: Array<LimitsParam>;
    public constructor() { 
    }
    public withName(name: string): UpdateBuildJobParameterParam {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): UpdateBuildJobParameterParam {
        this['value'] = value;
        return this;
    }
    public withLimits(limits: Array<LimitsParam>): UpdateBuildJobParameterParam {
        this['limits'] = limits;
        return this;
    }
}