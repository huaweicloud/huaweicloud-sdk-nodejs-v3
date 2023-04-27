

export class PolicyTriggerPropertiesReq {
    public pattern: Array<string>;
    public constructor(pattern?: any) { 
        this['pattern'] = pattern;
    }
    public withPattern(pattern: Array<string>): PolicyTriggerPropertiesReq {
        this['pattern'] = pattern;
        return this;
    }
}