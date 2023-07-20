

export class ShowRestorableListRequest {
    private 'backup_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(backupId?: string) { 
        this['backup_id'] = backupId;
    }
    public withBackupId(backupId: string): ShowRestorableListRequest {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withOffset(offset: number): ShowRestorableListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowRestorableListRequest {
        this['limit'] = limit;
        return this;
    }
}