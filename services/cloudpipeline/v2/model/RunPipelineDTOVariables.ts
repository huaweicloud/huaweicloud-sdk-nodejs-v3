

export class RunPipelineDTOVariables {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): RunPipelineDTOVariables {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): RunPipelineDTOVariables {
        this['value'] = value;
        return this;
    }
}