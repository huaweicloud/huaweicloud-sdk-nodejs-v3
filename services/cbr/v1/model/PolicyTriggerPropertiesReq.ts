

export class PolicyTriggerPropertiesReq {
    public pattern?: Array<string>;
    public constructor(pattern?: Array<string>) { 
        this['pattern'] = pattern;
    }
    public withPattern(pattern: Array<string>): PolicyTriggerPropertiesReq {
        this['pattern'] = pattern;
        return this;
    }
}