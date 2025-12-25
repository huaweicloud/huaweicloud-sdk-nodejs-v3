import { MalwareCount } from './MalwareCount';
import { OpensourceCount } from './OpensourceCount';


export class SecGuardTaskDetail {
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'scan_path'?: string;
    private 'file_name'?: string;
    private 'display_name'?: string;
    public path?: string;
    private 'created_time'?: string;
    public opensource?: OpensourceCount;
    public virus?: number;
    public malware?: MalwareCount;
    public status?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): SecGuardTaskDetail {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): SecGuardTaskDetail {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withScanPath(scanPath: string): SecGuardTaskDetail {
        this['scan_path'] = scanPath;
        return this;
    }
    public set scanPath(scanPath: string  | undefined) {
        this['scan_path'] = scanPath;
    }
    public get scanPath(): string | undefined {
        return this['scan_path'];
    }
    public withFileName(fileName: string): SecGuardTaskDetail {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withDisplayName(displayName: string): SecGuardTaskDetail {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withPath(path: string): SecGuardTaskDetail {
        this['path'] = path;
        return this;
    }
    public withCreatedTime(createdTime: string): SecGuardTaskDetail {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withOpensource(opensource: OpensourceCount): SecGuardTaskDetail {
        this['opensource'] = opensource;
        return this;
    }
    public withVirus(virus: number): SecGuardTaskDetail {
        this['virus'] = virus;
        return this;
    }
    public withMalware(malware: MalwareCount): SecGuardTaskDetail {
        this['malware'] = malware;
        return this;
    }
    public withStatus(status: string): SecGuardTaskDetail {
        this['status'] = status;
        return this;
    }
}