

export class PolicyRule {
    public source?: string;
    public destination?: Array<string>;
    public constructor() { 
    }
    public withSource(source: string): PolicyRule {
        this['source'] = source;
        return this;
    }
    public withDestination(destination: Array<string>): PolicyRule {
        this['destination'] = destination;
        return this;
    }
}