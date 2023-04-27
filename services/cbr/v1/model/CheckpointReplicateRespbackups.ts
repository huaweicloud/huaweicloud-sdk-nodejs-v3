

export class CheckpointReplicateRespbackups {
    private 'backup_id': string | undefined;
    private 'replication_record_id': string | undefined;
    public constructor(backupId?: any, replicationRecordId?: any) { 
        this['backup_id'] = backupId;
        this['replication_record_id'] = replicationRecordId;
    }
    public withBackupId(backupId: string): CheckpointReplicateRespbackups {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withReplicationRecordId(replicationRecordId: string): CheckpointReplicateRespbackups {
        this['replication_record_id'] = replicationRecordId;
        return this;
    }
    public set replicationRecordId(replicationRecordId: string | undefined) {
        this['replication_record_id'] = replicationRecordId;
    }
    public get replicationRecordId() {
        return this['replication_record_id'];
    }
}