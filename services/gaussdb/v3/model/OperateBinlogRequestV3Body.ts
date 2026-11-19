

export class OperateBinlogRequestV3Body {
    private 'switch_status'?: string;
    private 'keep_days'?: number;
    public constructor(switchStatus?: string) { 
        this['switch_status'] = switchStatus;
    }
    public withSwitchStatus(switchStatus: string): OperateBinlogRequestV3Body {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): string | undefined {
        return this['switch_status'];
    }
    public withKeepDays(keepDays: number): OperateBinlogRequestV3Body {
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