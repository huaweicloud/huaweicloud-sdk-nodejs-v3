

export class ShowBackupPolicyResult {
    private 'keep_days'?: number;
    private 'start_time'?: string;
    public period?: string;
    public constructor(keepDays?: number) { 
        this['keep_days'] = keepDays;
    }
    public withKeepDays(keepDays: number): ShowBackupPolicyResult {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withStartTime(startTime: string): ShowBackupPolicyResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withPeriod(period: string): ShowBackupPolicyResult {
        this['period'] = period;
        return this;
    }
}