

export class RemovePipelineRequest {
    private 'pipeline_id'?: string;
    public constructor(pipelineId?: string) { 
        this['pipeline_id'] = pipelineId;
    }
    public withPipelineId(pipelineId: string): RemovePipelineRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
}