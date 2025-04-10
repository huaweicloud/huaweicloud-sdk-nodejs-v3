

export class CreateAntiVirusTaskRequestInfo {
    private 'task_name'?: string;
    private 'task_id'?: string;
    private 'scan_type'?: string;
    public action?: string;
    private 'host_ids'?: Array<string>;
    public constructor(taskName?: string, scanType?: string, action?: string, hostIds?: Array<string>) { 
        this['task_name'] = taskName;
        this['scan_type'] = scanType;
        this['action'] = action;
        this['host_ids'] = hostIds;
    }
    public withTaskName(taskName: string): CreateAntiVirusTaskRequestInfo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskId(taskId: string): CreateAntiVirusTaskRequestInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withScanType(scanType: string): CreateAntiVirusTaskRequestInfo {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withAction(action: string): CreateAntiVirusTaskRequestInfo {
        this['action'] = action;
        return this;
    }
    public withHostIds(hostIds: Array<string>): CreateAntiVirusTaskRequestInfo {
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