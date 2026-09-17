

export class ShowPipelineRunDetailRequest {
    private 'pipeline_id'?: string;
    private 'pipeline_run_id'?: string;
    private 'pipeline_run_number'?: string;
    public constructor(pipelineId?: string) { 
        this['pipeline_id'] = pipelineId;
    }
    public withPipelineId(pipelineId: string): ShowPipelineRunDetailRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineRunId(pipelineRunId: string): ShowPipelineRunDetailRequest {
        this['pipeline_run_id'] = pipelineRunId;
        return this;
    }
    public set pipelineRunId(pipelineRunId: string  | undefined) {
        this['pipeline_run_id'] = pipelineRunId;
    }
    public get pipelineRunId(): string | undefined {
        return this['pipeline_run_id'];
    }
    public withPipelineRunNumber(pipelineRunNumber: string): ShowPipelineRunDetailRequest {
        this['pipeline_run_number'] = pipelineRunNumber;
        return this;
    }
    public set pipelineRunNumber(pipelineRunNumber: string  | undefined) {
        this['pipeline_run_number'] = pipelineRunNumber;
    }
    public get pipelineRunNumber(): string | undefined {
        return this['pipeline_run_number'];
    }
}