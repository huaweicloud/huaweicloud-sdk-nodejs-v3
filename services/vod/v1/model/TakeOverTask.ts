

export class TakeOverTask {
    public bucket?: string;
    private 'object'?: string | undefined;
    private 'host_type'?: number | undefined;
    private 'output_bucket'?: string | undefined;
    private 'output_path'?: string | undefined;
    private 'task_id'?: string | undefined;
    public suffix?: Array<string>;
    private 'template_group_name'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public status?: TakeOverTaskStatusEnum;
    private 'exec_desc'?: string | undefined;
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
    public set modelObject(modelObject: string | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject() {
        return this['object'];
    }
    public withHostType(hostType: number): TakeOverTask {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: number | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType() {
        return this['host_type'];
    }
    public withOutputBucket(outputBucket: string): TakeOverTask {
        this['output_bucket'] = outputBucket;
        return this;
    }
    public set outputBucket(outputBucket: string | undefined) {
        this['output_bucket'] = outputBucket;
    }
    public get outputBucket() {
        return this['output_bucket'];
    }
    public withOutputPath(outputPath: string): TakeOverTask {
        this['output_path'] = outputPath;
        return this;
    }
    public set outputPath(outputPath: string | undefined) {
        this['output_path'] = outputPath;
    }
    public get outputPath() {
        return this['output_path'];
    }
    public withTaskId(taskId: string): TakeOverTask {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
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
    public set templateGroupName(templateGroupName: string | undefined) {
        this['template_group_name'] = templateGroupName;
    }
    public get templateGroupName() {
        return this['template_group_name'];
    }
    public withCreateTime(createTime: string): TakeOverTask {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withEndTime(endTime: string): TakeOverTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withStatus(status: TakeOverTaskStatusEnum): TakeOverTask {
        this['status'] = status;
        return this;
    }
    public withExecDesc(execDesc: string): TakeOverTask {
        this['exec_desc'] = execDesc;
        return this;
    }
    public set execDesc(execDesc: string | undefined) {
        this['exec_desc'] = execDesc;
    }
    public get execDesc() {
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
