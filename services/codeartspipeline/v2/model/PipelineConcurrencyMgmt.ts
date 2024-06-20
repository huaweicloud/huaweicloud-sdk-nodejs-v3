

export class PipelineConcurrencyMgmt {
    private 'pipeline_id'?: string;
    private 'concurrency_number'?: number;
    private 'exceed_action'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public enable?: boolean;
    public constructor() { 
    }
    public withPipelineId(pipelineId: string): PipelineConcurrencyMgmt {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withConcurrencyNumber(concurrencyNumber: number): PipelineConcurrencyMgmt {
        this['concurrency_number'] = concurrencyNumber;
        return this;
    }
    public set concurrencyNumber(concurrencyNumber: number  | undefined) {
        this['concurrency_number'] = concurrencyNumber;
    }
    public get concurrencyNumber(): number | undefined {
        return this['concurrency_number'];
    }
    public withExceedAction(exceedAction: string): PipelineConcurrencyMgmt {
        this['exceed_action'] = exceedAction;
        return this;
    }
    public set exceedAction(exceedAction: string  | undefined) {
        this['exceed_action'] = exceedAction;
    }
    public get exceedAction(): string | undefined {
        return this['exceed_action'];
    }
    public withCreateTime(createTime: number): PipelineConcurrencyMgmt {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): PipelineConcurrencyMgmt {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withEnable(enable: boolean): PipelineConcurrencyMgmt {
        this['enable'] = enable;
        return this;
    }
}