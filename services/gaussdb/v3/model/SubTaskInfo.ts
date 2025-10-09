

export class SubTaskInfo {
    private 'sub_task_name'?: string;
    public percent?: string;
    private 'remaining_time'?: string;
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
}