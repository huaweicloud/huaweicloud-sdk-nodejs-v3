

export class MonitorTaskInfo {
    private 'task_id'?: string;
    private 'task_props'?: object;
    public constructor() { 
    }
    public withTaskId(taskId: string): MonitorTaskInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskProps(taskProps: object): MonitorTaskInfo {
        this['task_props'] = taskProps;
        return this;
    }
    public set taskProps(taskProps: object  | undefined) {
        this['task_props'] = taskProps;
    }
    public get taskProps(): object | undefined {
        return this['task_props'];
    }
}