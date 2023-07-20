import { BackupReplicateReq } from './BackupReplicateReq';


export class CopyBackupRequest {
    private 'backup_id'?: string;
    public body?: BackupReplicateReq;
    public constructor(backupId?: string) { 
        this['backup_id'] = backupId;
    }
    public withBackupId(backupId: string): CopyBackupRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBody(body: BackupReplicateReq): CopyBackupRequest {
        this['body'] = body;
        return this;
    }
}