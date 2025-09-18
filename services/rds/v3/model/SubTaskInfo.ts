

export class SubTaskInfo {
    private 'sub_task_name'?: string;
    public percent?: string;
    private 'executed_time'?: string;
    public status?: string;
    private 'remaining_time'?: string;
    private 'show_detail'?: boolean;
    public constructor() { 
    }
    public withSubTaskName(subTaskName: string): SubTaskInfo {
        this['sub_task_name'] = subTaskName;
        return this;
    }
    public set subTaskName(subTaskName: string  | undefined) {
        this['sub_task_name'] = subTaskName;
    }
    public get subTaskName(): string | undefined {
        return this['sub_task_name'];
    }
    public withPercent(percent: string): SubTaskInfo {
        this['percent'] = percent;
        return this;
    }
    public withExecutedTime(executedTime: string): SubTaskInfo {
        this['executed_time'] = executedTime;
        return this;
    }
    public set executedTime(executedTime: string  | undefined) {
        this['executed_time'] = executedTime;
    }
    public get executedTime(): string | undefined {
        return this['executed_time'];
    }
    public withStatus(status: string): SubTaskInfo {
        this['status'] = status;
        return this;
    }
    public withRemainingTime(remainingTime: string): SubTaskInfo {
        this['remaining_time'] = remainingTime;
        return this;
    }
    public set remainingTime(remainingTime: string  | undefined) {
        this['remaining_time'] = remainingTime;
    }
    public get remainingTime(): string | undefined {
        return this['remaining_time'];
    }
    public withShowDetail(showDetail: boolean): SubTaskInfo {
        this['show_detail'] = showDetail;
        return this;
    }
    public set showDetail(showDetail: boolean  | undefined) {
        this['show_detail'] = showDetail;
    }
    public get showDetail(): boolean | undefined {
        return this['show_detail'];
    }
}