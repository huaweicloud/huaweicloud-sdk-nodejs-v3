

export class PolicyDefinitionDefaultResourceTypes {
    public provider?: string;
    public type?: string;
    public constructor() { 
    }
    public withProvider(provider: string): PolicyDefinitionDefaultResourceTypes {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): PolicyDefinitionDefaultResourceTypes {
        this['type'] = type;
        return this;
    }
}