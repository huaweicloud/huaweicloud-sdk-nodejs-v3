

export class BackupReplicateRespBody {
    private 'backup_id'?: string | undefined;
    private 'destination_project_id'?: string | undefined;
    private 'destination_region'?: string | undefined;
    private 'destination_vault_id'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'provider_id'?: string | undefined;
    private 'replication_record_id'?: string | undefined;
    private 'source_region'?: string | undefined;
    public constructor() { 
    }
    public withBackupId(backupId: string): BackupReplicateRespBody {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withDestinationProjectId(destinationProjectId: string): BackupReplicateRespBody {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId() {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): BackupReplicateRespBody {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion() {
        return this['destination_region'];
    }
    public withDestinationVaultId(destinationVaultId: string): BackupReplicateRespBody {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId() {
        return this['destination_vault_id'];
    }
    public withProjectId(projectId: string): BackupReplicateRespBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProviderId(providerId: string): BackupReplicateRespBody {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId() {
        return this['provider_id'];
    }
    public withReplicationRecordId(replicationRecordId: string): BackupReplicateRespBody {
        this['replication_record_id'] = replicationRecordId;
        return this;
    }
    public set replicationRecordId(replicationRecordId: string | undefined) {
        this['replication_record_id'] = replicationRecordId;
    }
    public get replicationRecordId() {
        return this['replication_record_id'];
    }
    public withSourceRegion(sourceRegion: string): BackupReplicateRespBody {
        this['source_region'] = sourceRegion;
        return this;
    }
    public set sourceRegion(sourceRegion: string | undefined) {
        this['source_region'] = sourceRegion;
    }
    public get sourceRegion() {
        return this['source_region'];
    }
}