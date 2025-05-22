

export class GrowCheckResult {
    public pass?: boolean;
    public reason?: string;
    public required?: boolean;
    public desc?: string;
    public type?: string;
    public constructor() { 
    }
    public withPass(pass: boolean): GrowCheckResult {
        this['pass'] = pass;
        return this;
    }
    public withReason(reason: string): GrowCheckResult {
        this['reason'] = reason;
        return this;
    }
    public withRequired(required: boolean): GrowCheckResult {
        this['required'] = required;
        return this;
    }
    public withDesc(desc: string): GrowCheckResult {
        this['desc'] = desc;
        return this;
    }
    public withType(type: string): GrowCheckResult {
        this['type'] = type;
        return this;
    }
}