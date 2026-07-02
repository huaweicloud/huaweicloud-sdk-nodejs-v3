

export class SetDdlLogPolicyRequestBody {
    private 'switch_status'?: string;
    private 'keep_days'?: number;
    public constructor(switchStatus?: string, keepDays?: number) { 
        this['switch_status'] = switchStatus;
        this['keep_days'] = keepDays;
    }
    public withSwitchStatus(switchStatus: string): SetDdlLogPolicyRequestBody {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): string | undefined {
        return this['switch_status'];
    }
    public withKeepDays(keepDays: number): SetDdlLogPolicyRequestBody {
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