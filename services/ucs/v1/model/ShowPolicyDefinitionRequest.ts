

export class ShowPolicyDefinitionRequest {
    public policydefinitionid?: string;
    public constructor(policydefinitionid?: string) { 
        this['policydefinitionid'] = policydefinitionid;
    }
    public withPolicydefinitionid(policydefinitionid: string): ShowPolicyDefinitionRequest {
        this['policydefinitionid'] = policydefinitionid;
        return this;
    }
}