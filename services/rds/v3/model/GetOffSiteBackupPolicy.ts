

export class GetOffSiteBackupPolicy {
    private 'backup_type'?: string;
    private 'keep_days'?: number;
    private 'destination_region'?: string;
    private 'destination_project_id'?: string;
    public constructor() { 
    }
    public withBackupType(backupType: string): GetOffSiteBackupPolicy {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): string | undefined {
        return this['backup_type'];
    }
    public withKeepDays(keepDays: number): GetOffSiteBackupPolicy {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withDestinationRegion(destinationRegion: string): GetOffSiteBackupPolicy {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withDestinationProjectId(destinationProjectId: string): GetOffSiteBackupPolicy {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string  | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId(): string | undefined {
        return this['destination_project_id'];
    }
}