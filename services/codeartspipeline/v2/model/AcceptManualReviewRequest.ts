

export class AcceptManualReviewRequest {
    private 'job_run_id'?: string;
    private 'pipeline_id'?: string;
    private 'pipeline_run_id'?: string;
    private 'step_run_id'?: string;
    public constructor(jobRunId?: string, pipelineId?: string, pipelineRunId?: string, stepRunId?: string) { 
        this['job_run_id'] = jobRunId;
        this['pipeline_id'] = pipelineId;
        this['pipeline_run_id'] = pipelineRunId;
        this['step_run_id'] = stepRunId;
    }
    public withJobRunId(jobRunId: string): AcceptManualReviewRequest {
        this['job_run_id'] = jobRunId;
        return this;
    }
    public set jobRunId(jobRunId: string  | undefined) {
        this['job_run_id'] = jobRunId;
    }
    public get jobRunId(): string | undefined {
        return this['job_run_id'];
    }
    public withPipelineId(pipelineId: string): AcceptManualReviewRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineRunId(pipelineRunId: string): AcceptManualReviewRequest {
        this['pipeline_run_id'] = pipelineRunId;
        return this;
    }
    public set pipelineRunId(pipelineRunId: string  | undefined) {
        this['pipeline_run_id'] = pipelineRunId;
    }
    public get pipelineRunId(): string | undefined {
        return this['pipeline_run_id'];
    }
    public withStepRunId(stepRunId: string): AcceptManualReviewRequest {
        this['step_run_id'] = stepRunId;
        return this;
    }
    public set stepRunId(stepRunId: string  | undefined) {
        this['step_run_id'] = stepRunId;
    }
    public get stepRunId(): string | undefined {
        return this['step_run_id'];
    }
}