

export class TuningParameter {
    private 'param_name'?: string | undefined;
    private 'param_value'?: string | undefined;
    public availability?: string;
    public constructor() { 
    }
    public withParamName(paramName: string): TuningParameter {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName() {
        return this['param_name'];
    }
    public withParamValue(paramValue: string): TuningParameter {
        this['param_value'] = paramValue;
        return this;
    }
    public set paramValue(paramValue: string | undefined) {
        this['param_value'] = paramValue;
    }
    public get paramValue() {
        return this['param_value'];
    }
    public withAvailability(availability: string): TuningParameter {
        this['availability'] = availability;
        return this;
    }
}