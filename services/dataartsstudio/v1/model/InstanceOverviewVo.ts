

export class InstanceOverviewVo {
    public id?: number;
    public name?: string;
    private 'task_id'?: number;
    private 'task_type'?: string;
    private 'run_status'?: string;
    private 'notify_status'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor() { 
    }
    public withId(id: number): InstanceOverviewVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InstanceOverviewVo {
        this['name'] = name;
        return this;
    }
    public withTaskId(taskId: number): InstanceOverviewVo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withTaskType(taskType: string): InstanceOverviewVo {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withRunStatus(runStatus: string): InstanceOverviewVo {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: string  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): string | undefined {
        return this['run_status'];
    }
    public withNotifyStatus(notifyStatus: string): InstanceOverviewVo {
        this['notify_status'] = notifyStatus;
        return this;
    }
    public set notifyStatus(notifyStatus: string  | undefined) {
        this['notify_status'] = notifyStatus;
    }
    public get notifyStatus(): string | undefined {
        return this['notify_status'];
    }
    public withStartTime(startTime: number): InstanceOverviewVo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): InstanceOverviewVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}