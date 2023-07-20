import { ReplicationRecordsExtraInfo } from './ReplicationRecordsExtraInfo';


export class ReplicationRecordGet {
    private 'created_at'?: string;
    private 'destination_backup_id'?: string;
    private 'destination_checkpoint_id'?: string;
    private 'destination_project_id'?: string;
    private 'destination_region'?: string;
    private 'destination_vault_id'?: string;
    private 'extra_info'?: ReplicationRecordsExtraInfo;
    public id?: string;
    private 'source_backup_id'?: string;
    private 'source_checkpoint_id'?: string;
    private 'source_project_id'?: string;
    private 'source_region'?: string;
    public status?: ReplicationRecordGetStatusEnum | string;
    private 'vault_id'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withCreatedAt(createdAt: string): ReplicationRecordGet {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withDestinationBackupId(destinationBackupId: string): ReplicationRecordGet {
        this['destination_backup_id'] = destinationBackupId;
        return this;
    }
    public set destinationBackupId(destinationBackupId: string  | undefined) {
        this['destination_backup_id'] = destinationBackupId;
    }
    public get destinationBackupId(): string | undefined {
        return this['destination_backup_id'];
    }
    public withDestinationCheckpointId(destinationCheckpointId: string): ReplicationRecordGet {
        this['destination_checkpoint_id'] = destinationCheckpointId;
        return this;
    }
    public set destinationCheckpointId(destinationCheckpointId: string  | undefined) {
        this['destination_checkpoint_id'] = destinationCheckpointId;
    }
    public get destinationCheckpointId(): string | undefined {
        return this['destination_checkpoint_id'];
    }
    public withDestinationProjectId(destinationProjectId: string): ReplicationRecordGet {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string  | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId(): string | undefined {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): ReplicationRecordGet {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withDestinationVaultId(destinationVaultId: string): ReplicationRecordGet {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string  | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId(): string | undefined {
        return this['destination_vault_id'];
    }
    public withExtraInfo(extraInfo: ReplicationRecordsExtraInfo): ReplicationRecordGet {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: ReplicationRecordsExtraInfo  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): ReplicationRecordsExtraInfo | undefined {
        return this['extra_info'];
    }
    public withId(id: string): ReplicationRecordGet {
        this['id'] = id;
        return this;
    }
    public withSourceBackupId(sourceBackupId: string): ReplicationRecordGet {
        this['source_backup_id'] = sourceBackupId;
        return this;
    }
    public set sourceBackupId(sourceBackupId: string  | undefined) {
        this['source_backup_id'] = sourceBackupId;
    }
    public get sourceBackupId(): string | undefined {
        return this['source_backup_id'];
    }
    public withSourceCheckpointId(sourceCheckpointId: string): ReplicationRecordGet {
        this['source_checkpoint_id'] = sourceCheckpointId;
        return this;
    }
    public set sourceCheckpointId(sourceCheckpointId: string  | undefined) {
        this['source_checkpoint_id'] = sourceCheckpointId;
    }
    public get sourceCheckpointId(): string | undefined {
        return this['source_checkpoint_id'];
    }
    public withSourceProjectId(sourceProjectId: string): ReplicationRecordGet {
        this['source_project_id'] = sourceProjectId;
        return this;
    }
    public set sourceProjectId(sourceProjectId: string  | undefined) {
        this['source_project_id'] = sourceProjectId;
    }
    public get sourceProjectId(): string | undefined {
        return this['source_project_id'];
    }
    public withSourceRegion(sourceRegion: string): ReplicationRecordGet {
        this['source_region'] = sourceRegion;
        return this;
    }
    public set sourceRegion(sourceRegion: string  | undefined) {
        this['source_region'] = sourceRegion;
    }
    public get sourceRegion(): string | undefined {
        return this['source_region'];
    }
    public withStatus(status: ReplicationRecordGetStatusEnum | string): ReplicationRecordGet {
        this['status'] = status;
        return this;
    }
    public withVaultId(vaultId: string): ReplicationRecordGet {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReplicationRecordGetStatusEnum {
    REPLICATING = 'replicating',
    SUCCESS = 'success',
    FAIL = 'fail',
    SKIP = 'skip',
    WAITING_REPLICATE = 'waiting_replicate'
}
