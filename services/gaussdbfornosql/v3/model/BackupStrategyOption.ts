

export class BackupStrategyOption {
    private 'start_time'?: string;
    private 'keep_days'?: string;
    public constructor(startTime?: string) { 
        this['start_time'] = startTime;
    }
    public withStartTime(startTime: string): BackupStrategyOption {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withKeepDays(keepDays: string): BackupStrategyOption {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: string  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): string | undefined {
        return this['keep_days'];
    }
}