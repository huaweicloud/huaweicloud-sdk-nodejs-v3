

export class PipelineGroupBindDTOPipelines {
    private 'pipeline_id'?: string;
    private 'pipeline_name'?: string;
    public constructor(pipelineId?: string, pipelineName?: string) { 
        this['pipeline_id'] = pipelineId;
        this['pipeline_name'] = pipelineName;
    }
    public withPipelineId(pipelineId: string): PipelineGroupBindDTOPipelines {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineName(pipelineName: string): PipelineGroupBindDTOPipelines {
        this['pipeline_name'] = pipelineName;
        return this;
    }
    public set pipelineName(pipelineName: string  | undefined) {
        this['pipeline_name'] = pipelineName;
    }
    public get pipelineName(): string | undefined {
        return this['pipeline_name'];
    }
}