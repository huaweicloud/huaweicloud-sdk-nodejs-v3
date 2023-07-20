

export class MysqlBackupPolicy {
    private 'start_time'?: string;
    private 'keep_days'?: number;
    public period?: string;
    private 'retention_num_backup_level1'?: number;
    public constructor(startTime?: string, keepDays?: number, period?: string) { 
        this['start_time'] = startTime;
        this['keep_days'] = keepDays;
        this['period'] = period;
    }
    public withStartTime(startTime: string): MysqlBackupPolicy {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withKeepDays(keepDays: number): MysqlBackupPolicy {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withPeriod(period: string): MysqlBackupPolicy {
        this['period'] = period;
        return this;
    }
    public withRetentionNumBackupLevel1(retentionNumBackupLevel1: number): MysqlBackupPolicy {
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