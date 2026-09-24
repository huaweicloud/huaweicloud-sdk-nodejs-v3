

export class PolicyTriggerPropertiesResp {
    public pattern?: Array<string>;
    private 'start_time'?: string;
    private 'start_window_minutes'?: number;
    public constructor(pattern?: Array<string>) { 
        this['pattern'] = pattern;
    }
    public withPattern(pattern: Array<string>): PolicyTriggerPropertiesResp {
        this['pattern'] = pattern;
        return this;
    }
    public withStartTime(startTime: string): PolicyTriggerPropertiesResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withStartWindowMinutes(startWindowMinutes: number): PolicyTriggerPropertiesResp {
        this['start_window_minutes'] = startWindowMinutes;
        return this;
    }
    public set startWindowMinutes(startWindowMinutes: number  | undefined) {
        this['start_window_minutes'] = startWindowMinutes;
    }
    public get startWindowMinutes(): number | undefined {
        return this['start_window_minutes'];
    }
}