

export class StopPipelineRunRequest {
    private 'pipeline_id'?: string;
    private 'pipeline_run_id'?: string;
    public constructor(pipelineId?: string, pipelineRunId?: string) { 
        this['pipeline_id'] = pipelineId;
        this['pipeline_run_id'] = pipelineRunId;
    }
    public withPipelineId(pipelineId: string): StopPipelineRunRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineRunId(pipelineRunId: string): StopPipelineRunRequest {
        this['pipeline_run_id'] = pipelineRunId;
        return this;
    }
    public set pipelineRunId(pipelineRunId: string  | undefined) {
        this['pipeline_run_id'] = pipelineRunId;
    }
    public get pipelineRunId(): string | undefined {
        return this['pipeline_run_id'];
    }
}