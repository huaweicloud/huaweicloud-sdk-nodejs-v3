

export class TimeshiftRequestArgs {
    private 'back_time'?: string;
    public unit?: string;
    public constructor() { 
    }
    public withBackTime(backTime: string): TimeshiftRequestArgs {
        this['back_time'] = backTime;
        return this;
    }
    public set backTime(backTime: string  | undefined) {
        this['back_time'] = backTime;
    }
    public get backTime(): string | undefined {
        return this['back_time'];
    }
    public withUnit(unit: string): TimeshiftRequestArgs {
        this['unit'] = unit;
        return this;
    }
}