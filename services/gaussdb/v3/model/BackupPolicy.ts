

export class BackupPolicy {
    private 'keep_days'?: number;
    private 'start_time'?: string;
    public period?: string;
    private 'retention_num_backup_level1'?: number;
    public constructor(keepDays?: number) { 
        this['keep_days'] = keepDays;
    }
    public withKeepDays(keepDays: number): BackupPolicy {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withStartTime(startTime: string): BackupPolicy {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withPeriod(period: string): BackupPolicy {
        this['period'] = period;
        return this;
    }
    public withRetentionNumBackupLevel1(retentionNumBackupLevel1: number): BackupPolicy {
        this['retention_num_backup_level1'] = retentionNumBackupLevel1;
        return this;
    }
    public set retentionNumBackupLevel1(retentionNumBackupLevel1: number  | undefined) {
        this['retention_num_backup_level1'] = retentionNumBackupLevel1;
    }
    public get retentionNumBackupLevel1(): number | undefined {
        return this['retention_num_backup_level1'];
    }
}