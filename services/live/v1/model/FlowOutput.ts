

export class FlowOutput {
    public name?: string;
    public type?: string;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): FlowOutput {
        this['name'] = name;
        return this;
    }
    public withType(type: string): FlowOutput {
        this['type'] = type;
        return this;
    }
}