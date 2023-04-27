

export class OpExtendInfoReplication {
    private 'destination_backup_id'?: string | undefined;
    private 'destination_checkpoint_id'?: string | undefined;
    private 'destination_project_id': string | undefined;
    private 'destination_region': string | undefined;
    private 'source_backup_id': string | undefined;
    private 'source_checkpoint_id'?: string | undefined;
    private 'source_project_id': string | undefined;
    private 'source_region': string | undefined;
    private 'source_backup_name'?: string | undefined;
    private 'destination_backup_name'?: string | undefined;
    public constructor(destinationProjectId?: any, destinationRegion?: any, sourceBackupId?: any, sourceProjectId?: any, sourceRegion?: any) { 
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
    public set destinationBackupId(destinationBackupId: string | undefined) {
        this['destination_backup_id'] = destinationBackupId;
    }
    public get destinationBackupId() {
        return this['destination_backup_id'];
    }
    public withDestinationCheckpointId(destinationCheckpointId: string): OpExtendInfoReplication {
        this['destination_checkpoint_id'] = destinationCheckpointId;
        return this;
    }
    public set destinationCheckpointId(destinationCheckpointId: string | undefined) {
        this['destination_checkpoint_id'] = destinationCheckpointId;
    }
    public get destinationCheckpointId() {
        return this['destination_checkpoint_id'];
    }
    public withDestinationProjectId(destinationProjectId: string): OpExtendInfoReplication {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId() {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): OpExtendInfoReplication {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion() {
        return this['destination_region'];
    }
    public withSourceBackupId(sourceBackupId: string): OpExtendInfoReplication {
        this['source_backup_id'] = sourceBackupId;
        return this;
    }
    public set sourceBackupId(sourceBackupId: string | undefined) {
        this['source_backup_id'] = sourceBackupId;
    }
    public get sourceBackupId() {
        return this['source_backup_id'];
    }
    public withSourceCheckpointId(sourceCheckpointId: string): OpExtendInfoReplication {
        this['source_checkpoint_id'] = sourceCheckpointId;
        return this;
    }
    public set sourceCheckpointId(sourceCheckpointId: string | undefined) {
        this['source_checkpoint_id'] = sourceCheckpointId;
    }
    public get sourceCheckpointId() {
        return this['source_checkpoint_id'];
    }
    public withSourceProjectId(sourceProjectId: string): OpExtendInfoReplication {
        this['source_project_id'] = sourceProjectId;
        return this;
    }
    public set sourceProjectId(sourceProjectId: string | undefined) {
        this['source_project_id'] = sourceProjectId;
    }
    public get sourceProjectId() {
        return this['source_project_id'];
    }
    public withSourceRegion(sourceRegion: string): OpExtendInfoReplication {
        this['source_region'] = sourceRegion;
        return this;
    }
    public set sourceRegion(sourceRegion: string | undefined) {
        this['source_region'] = sourceRegion;
    }
    public get sourceRegion() {
        return this['source_region'];
    }
    public withSourceBackupName(sourceBackupName: string): OpExtendInfoReplication {
        this['source_backup_name'] = sourceBackupName;
        return this;
    }
    public set sourceBackupName(sourceBackupName: string | undefined) {
        this['source_backup_name'] = sourceBackupName;
    }
    public get sourceBackupName() {
        return this['source_backup_name'];
    }
    public withDestinationBackupName(destinationBackupName: string): OpExtendInfoReplication {
        this['destination_backup_name'] = destinationBackupName;
        return this;
    }
    public set destinationBackupName(destinationBackupName: string | undefined) {
        this['destination_backup_name'] = destinationBackupName;
    }
    public get destinationBackupName() {
        return this['destination_backup_name'];
    }
}