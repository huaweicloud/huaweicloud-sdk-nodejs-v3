

export class RunPipelineDTOVariables {
    public name?: string;
    public value?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
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