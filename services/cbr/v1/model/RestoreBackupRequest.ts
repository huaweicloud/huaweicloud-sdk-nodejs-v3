import { BackupRestoreReq } from './BackupRestoreReq';


export class RestoreBackupRequest {
    private 'backup_id'?: string;
    public body?: BackupRestoreReq;
    public constructor(backupId?: string) { 
        this['backup_id'] = backupId;
    }
    public withBackupId(backupId: string): RestoreBackupRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBody(body: BackupRestoreReq): RestoreBackupRequest {
        this['body'] = body;
        return this;
    }
}