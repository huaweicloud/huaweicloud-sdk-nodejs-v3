import { PipelineSourceParam } from './PipelineSourceParam';


export class PipelineSource {
    public type?: string;
    public params?: PipelineSourceParam;
    public constructor() { 
    }
    public withType(type: string): PipelineSource {
        this['type'] = type;
        return this;
    }
    public withParams(params: PipelineSourceParam): PipelineSource {
        this['params'] = params;
        return this;
    }
}