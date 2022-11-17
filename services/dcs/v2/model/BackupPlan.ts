

export class BackupPlan {
    private 'timezone_offset'?: string | undefined;
    private 'backup_at': Array<number> | undefined;
    private 'period_type': string | undefined;
    private 'begin_at': string | undefined;
    public constructor(backupAt?: any, periodType?: any, beginAt?: any) { 
        this['backup_at'] = backupAt;
        this['period_type'] = periodType;
        this['begin_at'] = beginAt;
    }
    public withTimezoneOffset(timezoneOffset: string): BackupPlan {
        this['timezone_offset'] = timezoneOffset;
        return this;
    }
    public set timezoneOffset(timezoneOffset: string | undefined) {
        this['timezone_offset'] = timezoneOffset;
    }
    public get timezoneOffset() {
        return this['timezone_offset'];
    }
    public withBackupAt(backupAt: Array<number>): BackupPlan {
        this['backup_at'] = backupAt;
        return this;
    }
    public set backupAt(backupAt: Array<number> | undefined) {
        this['backup_at'] = backupAt;
    }
    public get backupAt() {
        return this['backup_at'];
    }
    public withPeriodType(periodType: string): BackupPlan {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType() {
        return this['period_type'];
    }
    public withBeginAt(beginAt: string): BackupPlan {
        this['begin_at'] = beginAt;
        return this;
    }
    public set beginAt(beginAt: string | undefined) {
        this['begin_at'] = beginAt;
    }
    public get beginAt() {
        return this['begin_at'];
    }
}