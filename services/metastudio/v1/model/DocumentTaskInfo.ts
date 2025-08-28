

export class DocumentTaskInfo {
    private 'task_id'?: string;
    private 'task_status'?: string;
    private 'task_process'?: string;
    private 'task_result'?: string;
    private 'fail_reason'?: string;
    private 'create_time'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): DocumentTaskInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskStatus(taskStatus: string): DocumentTaskInfo {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withTaskProcess(taskProcess: string): DocumentTaskInfo {
        this['task_process'] = taskProcess;
        return this;
    }
    public set taskProcess(taskProcess: string  | undefined) {
        this['task_process'] = taskProcess;
    }
    public get taskProcess(): string | undefined {
        return this['task_process'];
    }
    public withTaskResult(taskResult: string): DocumentTaskInfo {
        this['task_result'] = taskResult;
        return this;
    }
    public set taskResult(taskResult: string  | undefined) {
        this['task_result'] = taskResult;
    }
    public get taskResult(): string | undefined {
        return this['task_result'];
    }
    public withFailReason(failReason: string): DocumentTaskInfo {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withCreateTime(createTime: string): DocumentTaskInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withBeginTime(beginTime: string): DocumentTaskInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): DocumentTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUpdateTime(updateTime: string): DocumentTaskInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}