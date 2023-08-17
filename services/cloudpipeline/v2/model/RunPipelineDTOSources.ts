import { RunPipelineDTOParams } from './RunPipelineDTOParams';


export class RunPipelineDTOSources {
    public type?: string;
    public params?: RunPipelineDTOParams;
    public constructor() { 
    }
    public withType(type: string): RunPipelineDTOSources {
        this['type'] = type;
        return this;
    }
    public withParams(params: RunPipelineDTOParams): RunPipelineDTOSources {
        this['params'] = params;
        return this;
    }
}