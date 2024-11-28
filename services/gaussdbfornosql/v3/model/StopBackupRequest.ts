import { StopBackupRequestBody } from './StopBackupRequestBody';


export class StopBackupRequest {
    private 'backup_id'?: string;
    public body?: StopBackupRequestBody;
    public constructor(backupId?: string) { 
        this['backup_id'] = backupId;
    }
    public withBackupId(backupId: string): StopBackupRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBody(body: StopBackupRequestBody): StopBackupRequest {
        this['body'] = body;
        return this;
    }
}