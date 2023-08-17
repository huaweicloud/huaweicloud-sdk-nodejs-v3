

export class PipelineParameter {
    public name?: string;
    public value?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): PipelineParameter {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): PipelineParameter {
        this['value'] = value;
        return this;
    }
}