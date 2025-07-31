

export class SwitchAntivirusTaskRequestInfo {
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'host_ids'?: Array<string>;
    public constructor(taskId?: string, taskName?: string, hostIds?: Array<string>) { 
        this['task_id'] = taskId;
        this['task_name'] = taskName;
        this['host_ids'] = hostIds;
    }
    public withTaskId(taskId: string): SwitchAntivirusTaskRequestInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): SwitchAntivirusTaskRequestInfo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withHostIds(hostIds: Array<string>): SwitchAntivirusTaskRequestInfo {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
}