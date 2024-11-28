

export class SetRedisPitrPolicyRequestBody {
    public enabled?: boolean;
    public interval?: number;
    private 'keep_days'?: number;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: boolean): SetRedisPitrPolicyRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withInterval(interval: number): SetRedisPitrPolicyRequestBody {
        this['interval'] = interval;
        return this;
    }
    public withKeepDays(keepDays: number): SetRedisPitrPolicyRequestBody {
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