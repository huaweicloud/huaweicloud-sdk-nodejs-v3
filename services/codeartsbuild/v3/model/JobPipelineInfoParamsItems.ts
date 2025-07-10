

export class JobPipelineInfoParamsItems {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): JobPipelineInfoParamsItems {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): JobPipelineInfoParamsItems {
        this['value'] = value;
        return this;
    }
}