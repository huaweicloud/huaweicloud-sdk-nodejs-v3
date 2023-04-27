import { BackupReplicateReq } from './BackupReplicateReq';


export class CopyBackupRequest {
    private 'backup_id': string | undefined;
    public body?: BackupReplicateReq;
    public constructor(backupId?: any) { 
        this['backup_id'] = backupId;
    }
    public withBackupId(backupId: string): CopyBackupRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withBody(body: BackupReplicateReq): CopyBackupRequest {
        this['body'] = body;
        return this;
    }
}