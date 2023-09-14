

export class StartPipelineBuildParams {
    public name?: string;
    public value?: string;
    public constructor(name?: string, value?: string) { 
        this['name'] = name;
        this['value'] = value;
    }
    public withName(name: string): StartPipelineBuildParams {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): StartPipelineBuildParams {
        this['value'] = value;
        return this;
    }
}