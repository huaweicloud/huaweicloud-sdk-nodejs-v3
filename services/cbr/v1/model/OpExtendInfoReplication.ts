

export class OpExtendInfoReplication {
    private 'destination_backup_id'?: string;
    private 'destination_checkpoint_id'?: string;
    private 'destination_project_id'?: string;
    private 'destination_region'?: string;
    private 'source_backup_id'?: string;
    private 'source_checkpoint_id'?: string;
    private 'source_project_id'?: string;
    private 'source_region'?: string;
    private 'source_backup_name'?: string;
    private 'destination_backup_name'?: string;
    public constructor(destinationProjectId?: string, destinationRegion?: string, sourceBackupId?: string, sourceProjectId?: string, sourceRegion?: string) { 
        this['destination_project_id'] = destinationProjectId;
        this['destination_region'] = destinationRegion;
        this['source_backup_id'] = sourceBackupId;
        this['source_project_id'] = sourceProjectId;
        this['source_region'] = sourceRegion;
    }
    public withDestinationBackupId(destinationBackupId: string): OpExtendInfoReplication {
        this['destination_backup_id'] = destinationBackupId;
        return this;
    }
    public set destinationBackupId(destinationBackupId: string  | undefined) {
        this['destination_backup_id'] = destinationBackupId;
    }
    public get destinationBackupId(): string | undefined {
        return this['destination_backup_id'];
    }
    public withDestinationCheckpointId(destinationCheckpointId: string): OpExtendInfoReplication {
        this['destination_checkpoint_id'] = destinationCheckpointId;
        return this;
    }
    public set destinationCheckpointId(destinationCheckpointId: string  | undefined) {
        this['destination_checkpoint_id'] = destinationCheckpointId;
    }
    public get destinationCheckpointId(): string | undefined {
        return this['destination_checkpoint_id'];
    }
    public withDestinationProjectId(destinationProjectId: string): OpExtendInfoReplication {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string  | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId(): string | undefined {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): OpExtendInfoReplication {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withSourceBackupId(sourceBackupId: string): OpExtendInfoReplication {
        this['source_backup_id'] = sourceBackupId;
        return this;
    }
    public set sourceBackupId(sourceBackupId: string  | undefined) {
        this['source_backup_id'] = sourceBackupId;
    }
    public get sourceBackupId(): string | undefined {
        return this['source_backup_id'];
    }
    public withSourceCheckpointId(sourceCheckpointId: string): OpExtendInfoReplication {
        this['source_checkpoint_id'] = sourceCheckpointId;
        return this;
    }
    public set sourceCheckpointId(sourceCheckpointId: string  | undefined) {
        this['source_checkpoint_id'] = sourceCheckpointId;
    }
    public get sourceCheckpointId(): string | undefined {
        return this['source_checkpoint_id'];
    }
    public withSourceProjectId(sourceProjectId: string): OpExtendInfoReplication {
        this['source_project_id'] = sourceProjectId;
        return this;
    }
    public set sourceProjectId(sourceProjectId: string  | undefined) {
        this['source_project_id'] = sourceProjectId;
    }
    public get sourceProjectId(): string | undefined {
        return this['source_project_id'];
    }
    public withSourceRegion(sourceRegion: string): OpExtendInfoReplication {
        this['source_region'] = sourceRegion;
        return this;
    }
    public set sourceRegion(sourceRegion: string  | undefined) {
        this['source_region'] = sourceRegion;
    }
    public get sourceRegion(): string | undefined {
        return this['source_region'];
    }
    public withSourceBackupName(sourceBackupName: string): OpExtendInfoReplication {
        this['source_backup_name'] = sourceBackupName;
        return this;
    }
    public set sourceBackupName(sourceBackupName: string  | undefined) {
        this['source_backup_name'] = sourceBackupName;
    }
    public get sourceBackupName(): string | undefined {
        return this['source_backup_name'];
    }
    public withDestinationBackupName(destinationBackupName: string): OpExtendInfoReplication {
        this['destination_backup_name'] = destinationBackupName;
        return this;
    }
    public set destinationBackupName(destinationBackupName: string  | undefined) {
        this['destination_backup_name'] = destinationBackupName;
    }
    public get destinationBackupName(): string | undefined {
        return this['destination_backup_name'];
    }
}