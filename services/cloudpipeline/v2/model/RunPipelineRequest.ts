import { RunPipelineDTO } from './RunPipelineDTO';


export class RunPipelineRequest {
    private 'pipeline_id'?: string;
    public body?: RunPipelineDTO;
    public constructor(pipelineId?: string) { 
        this['pipeline_id'] = pipelineId;
    }
    public withPipelineId(pipelineId: string): RunPipelineRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withBody(body: RunPipelineDTO): RunPipelineRequest {
        this['body'] = body;
        return this;
    }
}