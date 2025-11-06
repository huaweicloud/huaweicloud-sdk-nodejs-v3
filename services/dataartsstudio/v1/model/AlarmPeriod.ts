

export class AlarmPeriod {
    private 'complete_time'?: string;
    public period?: number;
    public constructor() { 
    }
    public withCompleteTime(completeTime: string): AlarmPeriod {
        this['complete_time'] = completeTime;
        return this;
    }
    public set completeTime(completeTime: string  | undefined) {
        this['complete_time'] = completeTime;
    }
    public get completeTime(): string | undefined {
        return this['complete_time'];
    }
    public withPeriod(period: number): AlarmPeriod {
        this['period'] = period;
        return this;
    }
}