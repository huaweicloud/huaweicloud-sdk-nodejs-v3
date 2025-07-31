

export class CreateAntiVirusPaidTaskRequestInfo {
    private 'task_name'?: string;
    private 'scan_type'?: string;
    public action?: string;
    private 'host_ids'?: Array<string>;
    private 'file_types'?: Array<number>;
    private 'scan_dir'?: string;
    private 'ignore_dir'?: string;
    private 'task_id'?: string;
    public constructor(taskName?: string, scanType?: string, action?: string, hostIds?: Array<string>) { 
        this['task_name'] = taskName;
        this['scan_type'] = scanType;
        this['action'] = action;
        this['host_ids'] = hostIds;
    }
    public withTaskName(taskName: string): CreateAntiVirusPaidTaskRequestInfo {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withScanType(scanType: string): CreateAntiVirusPaidTaskRequestInfo {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withAction(action: string): CreateAntiVirusPaidTaskRequestInfo {
        this['action'] = action;
        return this;
    }
    public withHostIds(hostIds: Array<string>): CreateAntiVirusPaidTaskRequestInfo {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
    public withFileTypes(fileTypes: Array<number>): CreateAntiVirusPaidTaskRequestInfo {
        this['file_types'] = fileTypes;
        return this;
    }
    public set fileTypes(fileTypes: Array<number>  | undefined) {
        this['file_types'] = fileTypes;
    }
    public get fileTypes(): Array<number> | undefined {
        return this['file_types'];
    }
    public withScanDir(scanDir: string): CreateAntiVirusPaidTaskRequestInfo {
        this['scan_dir'] = scanDir;
        return this;
    }
    public set scanDir(scanDir: string  | undefined) {
        this['scan_dir'] = scanDir;
    }
    public get scanDir(): string | undefined {
        return this['scan_dir'];
    }
    public withIgnoreDir(ignoreDir: string): CreateAntiVirusPaidTaskRequestInfo {
        this['ignore_dir'] = ignoreDir;
        return this;
    }
    public set ignoreDir(ignoreDir: string  | undefined) {
        this['ignore_dir'] = ignoreDir;
    }
    public get ignoreDir(): string | undefined {
        return this['ignore_dir'];
    }
    public withTaskId(taskId: string): CreateAntiVirusPaidTaskRequestInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}