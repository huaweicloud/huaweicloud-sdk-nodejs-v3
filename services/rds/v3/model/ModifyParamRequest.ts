

export class ModifyParamRequest {
    public value?: string;
    public constructor(value?: string) { 
        this['value'] = value;
    }
    public withValue(value: string): ModifyParamRequest {
        this['value'] = value;
        return this;
    }
}