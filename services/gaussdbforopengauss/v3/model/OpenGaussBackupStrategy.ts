

export class OpenGaussBackupStrategy {
    private 'start_time'?: string;
    private 'keep_days'?: number;
    public constructor(startTime?: string) { 
        this['start_time'] = startTime;
    }
    public withStartTime(startTime: string): OpenGaussBackupStrategy {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withKeepDays(keepDays: number): OpenGaussBackupStrategy {
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