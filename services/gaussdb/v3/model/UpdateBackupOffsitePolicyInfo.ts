

export class UpdateBackupOffsitePolicyInfo {
    private 'open_auto_backup'?: boolean;
    private 'open_incremental_backup'?: boolean;
    private 'destination_project_id'?: string;
    private 'destination_region'?: string;
    private 'keep_days'?: number;
    public constructor(openAutoBackup?: boolean, openIncrementalBackup?: boolean, destinationProjectId?: string, destinationRegion?: string, keepDays?: number) { 
        this['open_auto_backup'] = openAutoBackup;
        this['open_incremental_backup'] = openIncrementalBackup;
        this['destination_project_id'] = destinationProjectId;
        this['destination_region'] = destinationRegion;
        this['keep_days'] = keepDays;
    }
    public withOpenAutoBackup(openAutoBackup: boolean): UpdateBackupOffsitePolicyInfo {
        this['open_auto_backup'] = openAutoBackup;
        return this;
    }
    public set openAutoBackup(openAutoBackup: boolean  | undefined) {
        this['open_auto_backup'] = openAutoBackup;
    }
    public get openAutoBackup(): boolean | undefined {
        return this['open_auto_backup'];
    }
    public withOpenIncrementalBackup(openIncrementalBackup: boolean): UpdateBackupOffsitePolicyInfo {
        this['open_incremental_backup'] = openIncrementalBackup;
        return this;
    }
    public set openIncrementalBackup(openIncrementalBackup: boolean  | undefined) {
        this['open_incremental_backup'] = openIncrementalBackup;
    }
    public get openIncrementalBackup(): boolean | undefined {
        return this['open_incremental_backup'];
    }
    public withDestinationProjectId(destinationProjectId: string): UpdateBackupOffsitePolicyInfo {
        this['destination_project_id'] = destinationProjectId;
        return this;
    }
    public set destinationProjectId(destinationProjectId: string  | undefined) {
        this['destination_project_id'] = destinationProjectId;
    }
    public get destinationProjectId(): string | undefined {
        return this['destination_project_id'];
    }
    public withDestinationRegion(destinationRegion: string): UpdateBackupOffsitePolicyInfo {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withKeepDays(keepDays: number): UpdateBackupOffsitePolicyInfo {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
}