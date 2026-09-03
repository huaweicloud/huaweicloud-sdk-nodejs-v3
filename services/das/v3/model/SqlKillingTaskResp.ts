

export class SqlKillingTaskResp {
    public user?: string;
    public host?: string;
    public db?: string;
    public info?: string;
    public command?: string;
    public time?: number;
    private 'task_id'?: number;
    private 'task_type'?: string;
    private 'task_duration'?: number;
    private 'task_state'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor() { 
    }
    public withUser(user: string): SqlKillingTaskResp {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): SqlKillingTaskResp {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): SqlKillingTaskResp {
        this['db'] = db;
        return this;
    }
    public withInfo(info: string): SqlKillingTaskResp {
        this['info'] = info;
        return this;
    }
    public withCommand(command: string): SqlKillingTaskResp {
        this['command'] = command;
        return this;
    }
    public withTime(time: number): SqlKillingTaskResp {
        this['time'] = time;
        return this;
    }
    public withTaskId(taskId: number): SqlKillingTaskResp {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withTaskType(taskType: string): SqlKillingTaskResp {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withTaskDuration(taskDuration: number): SqlKillingTaskResp {
        this['task_duration'] = taskDuration;
        return this;
    }
    public set taskDuration(taskDuration: number  | undefined) {
        this['task_duration'] = taskDuration;
    }
    public get taskDuration(): number | undefined {
        return this['task_duration'];
    }
    public withTaskState(taskState: number): SqlKillingTaskResp {
        this['task_state'] = taskState;
        return this;
    }
    public set taskState(taskState: number  | undefined) {
        this['task_state'] = taskState;
    }
    public get taskState(): number | undefined {
        return this['task_state'];
    }
    public withStartTime(startTime: number): SqlKillingTaskResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): SqlKillingTaskResp {
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