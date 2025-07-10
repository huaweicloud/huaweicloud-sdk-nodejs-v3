

export class TransferBackupResponseBodyResults {
    private 'backup_id'?: string;
    public status?: string;
    private 'job_id'?: string;
    public constructor() { 
    }
    public withBackupId(backupId: string): TransferBackupResponseBodyResults {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withStatus(status: string): TransferBackupResponseBodyResults {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): TransferBackupResponseBodyResults {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}