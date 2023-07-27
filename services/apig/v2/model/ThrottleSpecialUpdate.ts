

export class ThrottleSpecialUpdate {
    private 'call_limits'?: number;
    public constructor(callLimits?: number) { 
        this['call_limits'] = callLimits;
    }
    public withCallLimits(callLimits: number): ThrottleSpecialUpdate {
        this['call_limits'] = callLimits;
        return this;
    }
    public set callLimits(callLimits: number  | undefined) {
        this['call_limits'] = callLimits;
    }
    public get callLimits(): number | undefined {
        return this['call_limits'];
    }
}