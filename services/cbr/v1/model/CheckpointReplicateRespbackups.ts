

export class CheckpointReplicateRespbackups {
    private 'backup_id'?: string;
    private 'replication_record_id'?: string;
    public constructor(backupId?: string, replicationRecordId?: string) { 
        this['backup_id'] = backupId;
        this['replication_record_id'] = replicationRecordId;
    }
    public withBackupId(backupId: string): CheckpointReplicateRespbackups {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withReplicationRecordId(replicationRecordId: string): CheckpointReplicateRespbackups {
        this['replication_record_id'] = replicationRecordId;
        return this;
    }
    public set replicationRecordId(replicationRecordId: string  | undefined) {
        this['replication_record_id'] = replicationRecordId;
    }
    public get replicationRecordId(): string | undefined {
        return this['replication_record_id'];
    }
}