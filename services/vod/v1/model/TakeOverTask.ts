

export class TakeOverTask {
    public bucket?: string;
    private 'object'?: string;
    private 'host_type'?: number;
    private 'output_bucket'?: string;
    private 'output_path'?: string;
    private 'task_id'?: string;
    public suffix?: Array<string>;
    private 'template_group_name'?: string;
    private 'create_time'?: string;
    private 'end_time'?: string;
    public status?: TakeOverTaskStatusEnum | string;
    private 'exec_desc'?: string;
    public constructor() { 
    }
    public withBucket(bucket: string): TakeOverTask {
        this['bucket'] = bucket;
        return this;
    }
    public withModelObject(modelObject: string): TakeOverTask {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
    public withHostType(hostType: number): TakeOverTask {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: number  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): number | undefined {
        return this['host_type'];
    }
    public withOutputBucket(outputBucket: string): TakeOverTask {
        this['output_bucket'] = outputBucket;
        return this;
    }
    public set outputBucket(outputBucket: string  | undefined) {
        this['output_bucket'] = outputBucket;
    }
    public get outputBucket(): string | undefined {
        return this['output_bucket'];
    }
    public withOutputPath(outputPath: string): TakeOverTask {
        this['output_path'] = outputPath;
        return this;
    }
    public set outputPath(outputPath: string  | undefined) {
        this['output_path'] = outputPath;
    }
    public get outputPath(): string | undefined {
        return this['output_path'];
    }
    public withTaskId(taskId: string): TakeOverTask {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withSuffix(suffix: Array<string>): TakeOverTask {
        this['suffix'] = suffix;
        return this;
    }
    public withTemplateGroupName(templateGroupName: string): TakeOverTask {
        this['template_group_name'] = templateGroupName;
        return this;
    }
    public set templateGroupName(templateGroupName: string  | undefined) {
        this['template_group_name'] = templateGroupName;
    }
    public get templateGroupName(): string | undefined {
        return this['template_group_name'];
    }
    public withCreateTime(createTime: string): TakeOverTask {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: string): TakeOverTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: TakeOverTaskStatusEnum | string): TakeOverTask {
        this['status'] = status;
        return this;
    }
    public withExecDesc(execDesc: string): TakeOverTask {
        this['exec_desc'] = execDesc;
        return this;
    }
    public set execDesc(execDesc: string  | undefined) {
        this['exec_desc'] = execDesc;
    }
    public get execDesc(): string | undefined {
        return this['exec_desc'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TakeOverTaskStatusEnum {
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED'
}
