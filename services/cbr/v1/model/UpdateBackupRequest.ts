import { BackupUpdateReq } from './BackupUpdateReq';


export class UpdateBackupRequest {
    private 'backup_id'?: string;
    public body?: BackupUpdateReq;
    public constructor(backupId?: string) { 
        this['backup_id'] = backupId;
    }
    public withBackupId(backupId: string): UpdateBackupRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBody(body: BackupUpdateReq): UpdateBackupRequest {
        this['body'] = body;
        return this;
    }
}