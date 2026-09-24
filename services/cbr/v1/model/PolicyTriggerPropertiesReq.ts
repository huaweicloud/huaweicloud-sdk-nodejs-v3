

export class PolicyTriggerPropertiesReq {
    public pattern?: Array<string>;
    private 'start_window_minutes'?: number;
    public constructor(pattern?: Array<string>) { 
        this['pattern'] = pattern;
    }
    public withPattern(pattern: Array<string>): PolicyTriggerPropertiesReq {
        this['pattern'] = pattern;
        return this;
    }
    public withStartWindowMinutes(startWindowMinutes: number): PolicyTriggerPropertiesReq {
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