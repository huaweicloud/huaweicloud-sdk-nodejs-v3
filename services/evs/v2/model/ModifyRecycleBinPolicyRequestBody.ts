

export class ModifyRecycleBinPolicyRequestBody {
    private 'switch'?: boolean;
    private 'threshold_time'?: number;
    private 'keep_time'?: number;
    public constructor() { 
    }
    public withSwitch(_switch: boolean): ModifyRecycleBinPolicyRequestBody {
        this['switch'] = _switch;
        return this;
    }
    public set _switch(_switch: boolean  | undefined) {
        this['switch'] = _switch;
    }
    public get _switch(): boolean | undefined {
        return this['switch'];
    }
    public withThresholdTime(thresholdTime: number): ModifyRecycleBinPolicyRequestBody {
        this['threshold_time'] = thresholdTime;
        return this;
    }
    public set thresholdTime(thresholdTime: number  | undefined) {
        this['threshold_time'] = thresholdTime;
    }
    public get thresholdTime(): number | undefined {
        return this['threshold_time'];
    }
    public withKeepTime(keepTime: number): ModifyRecycleBinPolicyRequestBody {
        this['keep_time'] = keepTime;
        return this;
    }
    public set keepTime(keepTime: number  | undefined) {
        this['keep_time'] = keepTime;
    }
    public get keepTime(): number | undefined {
        return this['keep_time'];
    }
}