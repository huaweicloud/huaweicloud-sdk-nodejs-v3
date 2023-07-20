

export class PolicyTriggerPropertiesResp {
    public pattern?: Array<string>;
    private 'start_time'?: string;
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
}