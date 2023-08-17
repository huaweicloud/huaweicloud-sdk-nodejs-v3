

export class BatchShowPipelinesStatusRequest {
    private 'pipeline_ids'?: string;
    public constructor(pipelineIds?: string) { 
        this['pipeline_ids'] = pipelineIds;
    }
    public withPipelineIds(pipelineIds: string): BatchShowPipelinesStatusRequest {
        this['pipeline_ids'] = pipelineIds;
        return this;
    }
    public set pipelineIds(pipelineIds: string  | undefined) {
        this['pipeline_ids'] = pipelineIds;
    }
    public get pipelineIds(): string | undefined {
        return this['pipeline_ids'];
    }
}