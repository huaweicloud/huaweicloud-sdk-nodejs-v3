

export class StopHotPipelineRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): StopHotPipelineRequestBody {
        this['name'] = name;
        return this;
    }
}