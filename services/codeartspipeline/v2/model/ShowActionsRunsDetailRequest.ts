

export class ShowActionsRunsDetailRequest {
    private 'domain_id'?: string;
    private 'pipeline_id'?: string;
    private 'pipeline_run_id'?: string;
    public constructor(domainId?: string, pipelineId?: string, pipelineRunId?: string) { 
        this['domain_id'] = domainId;
        this['pipeline_id'] = pipelineId;
        this['pipeline_run_id'] = pipelineRunId;
    }
    public withDomainId(domainId: string): ShowActionsRunsDetailRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPipelineId(pipelineId: string): ShowActionsRunsDetailRequest {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineRunId(pipelineRunId: string): ShowActionsRunsDetailRequest {
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