import { RunPipelineSourceParams } from './RunPipelineSourceParams';


export class RunPipelineSource {
    public type?: string;
    public params?: RunPipelineSourceParams;
    public constructor() { 
    }
    public withType(type: string): RunPipelineSource {
        this['type'] = type;
        return this;
    }
    public withParams(params: RunPipelineSourceParams): RunPipelineSource {
        this['params'] = params;
        return this;
    }
}