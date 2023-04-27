import { ReplicationRecordsExtraInfo } from './ReplicationRecordsExtraInfo';


export class ReplicationRecordGet {
    private 'created_at'?: string | undefined;
    private 'destination_backup_id'?: string | undefined;
    private 'destination_checkpoint_id'?: string | undefined;
    private 'destination_project_id'?: string | undefined;
    private 'destination_region'?: string | undefined;
    private 'destination_vault_id'?: string | undefined;
    private 'extra_info'?: ReplicationRecordsExtraInfo | undefined;
    public id: string;
    private 'source_backup_id'?: string | undefined;
    private 'source_checkpoint_id'?: string | undefined;
    private 'source_project_id'?: string | undefined;
    private 'source_region'?: string | undefined;
    public status?: ReplicationRecordGetStatusEnum;
    private 'vault_id'?: string | undefined;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withCreatedAt(createdAt: string): ReplicationRecordGet {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withDestinationBackupId(destinationBackupId: string): ReplicationRecordGet {
        this['destination_backup_id'] = destinationBackupId;
        return this;
    }
    public set destinationBackupId(destinationBackupId: string | undefined) {
        this['destination_backup_id'] = destinationBackupId;
    }
    public get destinationBackupId() {
        return this['destination_backup_id'];
    }
    public withDestinationCheckpointId(destinationCheckpointId: string): ReplicationRecordGet {
        this['destination_checkpoint_id'] = destinationCheckpointId;
        return this;
    }
    public set destinationCheckpointId(destinationCheckpointId: string | undefined) {
        this['destination_checkpoint_id'] = destinationCheckpointId;
    }
    public get destinationCheckpointId() {
        return this['destination_checkpoint_id'];
    }
    public withDestinationProjectId(destinationProjectId: string): ReplicationRecordGet {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId() {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): ReplicationRecordGet {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion() {
        return this['destination_region'];
    }
    public withDestinationVaultId(destinationVaultId: string): ReplicationRecordGet {
        this['destination_vault_id'] = destinationVaultId;
        return this;
    }
    public set destinationVaultId(destinationVaultId: string | undefined) {
        this['destination_vault_id'] = destinationVaultId;
    }
    public get destinationVaultId() {
        return this['destination_vault_id'];
    }
    public withExtraInfo(extraInfo: ReplicationRecordsExtraInfo): ReplicationRecordGet {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: ReplicationRecordsExtraInfo | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo() {
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
    public set sourceBackupId(sourceBackupId: string | undefined) {
        this['source_backup_id'] = sourceBackupId;
    }
    public get sourceBackupId() {
        return this['source_backup_id'];
    }
    public withSourceCheckpointId(sourceCheckpointId: string): ReplicationRecordGet {
        this['source_checkpoint_id'] = sourceCheckpointId;
        return this;
    }
    public set sourceCheckpointId(sourceCheckpointId: string | undefined) {
        this['source_checkpoint_id'] = sourceCheckpointId;
    }
    public get sourceCheckpointId() {
        return this['source_checkpoint_id'];
    }
    public withSourceProjectId(sourceProjectId: string): ReplicationRecordGet {
        this['source_project_id'] = sourceProjectId;
        return this;
    }
    public set sourceProjectId(sourceProjectId: string | undefined) {
        this['source_project_id'] = sourceProjectId;
    }
    public get sourceProjectId() {
        return this['source_project_id'];
    }
    public withSourceRegion(sourceRegion: string): ReplicationRecordGet {
        this['source_region'] = sourceRegion;
        return this;
    }
    public set sourceRegion(sourceRegion: string | undefined) {
        this['source_region'] = sourceRegion;
    }
    public get sourceRegion() {
        return this['source_region'];
    }
    public withStatus(status: ReplicationRecordGetStatusEnum): ReplicationRecordGet {
        this['status'] = status;
        return this;
    }
    public withVaultId(vaultId: string): ReplicationRecordGet {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId() {
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
