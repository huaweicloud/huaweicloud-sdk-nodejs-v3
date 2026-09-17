

export class ListPipelineRunsQuery {
    public status?: Array<string>;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'update_time'?: string;
    private 'trigger_type'?: Array<string>;
    private 'executor_ids'?: Array<string>;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'show_job_details'?: boolean;
    private 'stage_id'?: string;
    private 'job_id'?: string;
    public constructor() { 
    }
    public withStatus(status: Array<string>): ListPipelineRunsQuery {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListPipelineRunsQuery {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListPipelineRunsQuery {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUpdateTime(updateTime: string): ListPipelineRunsQuery {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withTriggerType(triggerType: Array<string>): ListPipelineRunsQuery {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: Array<string>  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): Array<string> | undefined {
        return this['trigger_type'];
    }
    public withExecutorIds(executorIds: Array<string>): ListPipelineRunsQuery {
        this['executor_ids'] = executorIds;
        return this;
    }
    public set executorIds(executorIds: Array<string>  | undefined) {
        this['executor_ids'] = executorIds;
    }
    public get executorIds(): Array<string> | undefined {
        return this['executor_ids'];
    }
    public withOffset(offset: number): ListPipelineRunsQuery {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipelineRunsQuery {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListPipelineRunsQuery {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListPipelineRunsQuery {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withShowJobDetails(showJobDetails: boolean): ListPipelineRunsQuery {
        this['show_job_details'] = showJobDetails;
        return this;
    }
    public set showJobDetails(showJobDetails: boolean  | undefined) {
        this['show_job_details'] = showJobDetails;
    }
    public get showJobDetails(): boolean | undefined {
        return this['show_job_details'];
    }
    public withStageId(stageId: string): ListPipelineRunsQuery {
        this['stage_id'] = stageId;
        return this;
    }
    public set stageId(stageId: string  | undefined) {
        this['stage_id'] = stageId;
    }
    public get stageId(): string | undefined {
        return this['stage_id'];
    }
    public withJobId(jobId: string): ListPipelineRunsQuery {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}