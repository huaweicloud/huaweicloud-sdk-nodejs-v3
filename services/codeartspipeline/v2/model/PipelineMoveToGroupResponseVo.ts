

export class PipelineMoveToGroupResponseVo {
    public code?: string;
    private 'pipeline_id'?: string;
    private 'pipeline_name'?: string;
    public constructor(code?: string, pipelineId?: string, pipelineName?: string) { 
        this['code'] = code;
        this['pipeline_id'] = pipelineId;
        this['pipeline_name'] = pipelineName;
    }
    public withCode(code: string): PipelineMoveToGroupResponseVo {
        this['code'] = code;
        return this;
    }
    public withPipelineId(pipelineId: string): PipelineMoveToGroupResponseVo {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineName(pipelineName: string): PipelineMoveToGroupResponseVo {
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