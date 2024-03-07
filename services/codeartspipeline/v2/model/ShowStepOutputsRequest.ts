

export class ShowStepOutputsRequest {
    private 'pipeline_id'?: string;
    private 'pipeline_run_id'?: string;
    private 'step_run_ids'?: string;
    public constructor(pipelineId?: string, pipelineRunId?: string) { 
        this['pipeline_id'] = pipelineId;
        this['pipeline_run_id'] = pipelineRunId;
    }
    public withPipelineId(pipelineId: string): ShowStepOutputsRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineRunId(pipelineRunId: string): ShowStepOutputsRequest {
        this['pipeline_run_id'] = pipelineRunId;
        return this;
    }
    public set pipelineRunId(pipelineRunId: string  | undefined) {
        this['pipeline_run_id'] = pipelineRunId;
    }
    public get pipelineRunId(): string | undefined {
        return this['pipeline_run_id'];
    }
    public withStepRunIds(stepRunIds: string): ShowStepOutputsRequest {
        this['step_run_ids'] = stepRunIds;
        return this;
    }
    public set stepRunIds(stepRunIds: string  | undefined) {
        this['step_run_ids'] = stepRunIds;
    }
    public get stepRunIds(): string | undefined {
        return this['step_run_ids'];
    }
}