

export class SparseBackupPolicy {
    public id?: string;
    public period?: string;
    private 'keep_days'?: number;
    private 'start_time'?: string;
    public constructor() { 
    }
    public withId(id: string): SparseBackupPolicy {
        this['id'] = id;
        return this;
    }
    public withPeriod(period: string): SparseBackupPolicy {
        this['period'] = period;
        return this;
    }
    public withKeepDays(keepDays: number): SparseBackupPolicy {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withStartTime(startTime: string): SparseBackupPolicy {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
}