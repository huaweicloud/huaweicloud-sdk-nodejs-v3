import { StartPipelineParameters } from './StartPipelineParameters';


export class StartNewPipelineRequest {
    private 'pipeline_id'?: string;
    public body?: StartPipelineParameters;
    public constructor(pipelineId?: string) { 
        this['pipeline_id'] = pipelineId;
    }
    public withPipelineId(pipelineId: string): StartNewPipelineRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withBody(body: StartPipelineParameters): StartNewPipelineRequest {
        this['body'] = body;
        return this;
    }
}