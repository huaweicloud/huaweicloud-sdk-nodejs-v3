

export class PolicyTriggerPropertiesResp {
    public pattern: Array<string>;
    private 'start_time'?: string | undefined;
    public constructor(pattern?: any) { 
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
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
}