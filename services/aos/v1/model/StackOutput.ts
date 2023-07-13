

export class StackOutput {
    public name?: string;
    public description?: string;
    public type?: string;
    public value?: string;
    public sensitive?: boolean;
    public constructor() { 
    }
    public withName(name: string): StackOutput {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): StackOutput {
        this['description'] = description;
        return this;
    }
    public withType(type: string): StackOutput {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): StackOutput {
        this['value'] = value;
        return this;
    }
    public withSensitive(sensitive: boolean): StackOutput {
        this['sensitive'] = sensitive;
        return this;
    }
}