

export class ActionsPipelineRunsPollingQueryDTO {
    private 'pipeline_run_ids'?: Array<string>;
    public constructor() { 
    }
    public withPipelineRunIds(pipelineRunIds: Array<string>): ActionsPipelineRunsPollingQueryDTO {
        this['pipeline_run_ids'] = pipelineRunIds;
        return this;
    }
    public set pipelineRunIds(pipelineRunIds: Array<string>  | undefined) {
        this['pipeline_run_ids'] = pipelineRunIds;
    }
    public get pipelineRunIds(): Array<string> | undefined {
        return this['pipeline_run_ids'];
    }
}