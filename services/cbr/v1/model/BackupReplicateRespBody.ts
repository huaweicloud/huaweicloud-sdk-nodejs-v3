

export class BackupReplicateRespBody {
    private 'backup_id'?: string;
    private 'destination_project_id'?: string;
    private 'destination_region'?: string;
    private 'destination_vault_id'?: string;
    private 'project_id'?: string;
    private 'provider_id'?: string;
    private 'replication_record_id'?: string;
    private 'source_region'?: string;
    public constructor() { 
    }
    public withBackupId(backupId: string): BackupReplicateRespBody {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withDestinationProjectId(destinationProjectId: string): BackupReplicateRespBody {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string  | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId(): string | undefined {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): BackupReplicateRespBody {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withDestinationVaultId(destinationVaultId: string): BackupReplicateRespBody {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string  | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId(): string | undefined {
        return this['destination_vault_id'];
    }
    public withProjectId(projectId: string): BackupReplicateRespBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProviderId(providerId: string): BackupReplicateRespBody {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withReplicationRecordId(replicationRecordId: string): BackupReplicateRespBody {
        this['replication_record_id'] = replicationRecordId;
        return this;
    }
    public set replicationRecordId(replicationRecordId: string  | undefined) {
        this['replication_record_id'] = replicationRecordId;
    }
    public get replicationRecordId(): string | undefined {
        return this['replication_record_id'];
    }
    public withSourceRegion(sourceRegion: string): BackupReplicateRespBody {
        this['source_region'] = sourceRegion;
        return this;
    }
    public set sourceRegion(sourceRegion: string  | undefined) {
        this['source_region'] = sourceRegion;
    }
    public get sourceRegion(): string | undefined {
        return this['source_region'];
    }
}