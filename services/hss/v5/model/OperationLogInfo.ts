import { ErrorInfo } from './ErrorInfo';


export class OperationLogInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'backup_name'?: string;
    public process?: number;
    public status?: string;
    private 'started_at'?: string;
    private 'ended_at'?: string;
    private 'error_info'?: ErrorInfo;
    public constructor() { 
    }
    public withHostId(hostId: string): OperationLogInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): OperationLogInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withBackupName(backupName: string): OperationLogInfo {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withProcess(process: number): OperationLogInfo {
        this['process'] = process;
        return this;
    }
    public withStatus(status: string): OperationLogInfo {
        this['status'] = status;
        return this;
    }
    public withStartedAt(startedAt: string): OperationLogInfo {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string  | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt(): string | undefined {
        return this['started_at'];
    }
    public withEndedAt(endedAt: string): OperationLogInfo {
        this['ended_at'] = endedAt;
        return this;
    }
    public set endedAt(endedAt: string  | undefined) {
        this['ended_at'] = endedAt;
    }
    public get endedAt(): string | undefined {
        return this['ended_at'];
    }
    public withErrorInfo(errorInfo: ErrorInfo): OperationLogInfo {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorInfo  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorInfo | undefined {
        return this['error_info'];
    }
}