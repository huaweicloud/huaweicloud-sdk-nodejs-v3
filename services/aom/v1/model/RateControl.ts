

export class RateControl {
    private 'have_rate_control'?: boolean;
    private 'time_delay'?: number;
    public max?: number;
    public constructor() { 
    }
    public withHaveRateControl(haveRateControl: boolean): RateControl {
        this['have_rate_control'] = haveRateControl;
        return this;
    }
    public set haveRateControl(haveRateControl: boolean  | undefined) {
        this['have_rate_control'] = haveRateControl;
    }
    public get haveRateControl(): boolean | undefined {
        return this['have_rate_control'];
    }
    public withTimeDelay(timeDelay: number): RateControl {
        this['time_delay'] = timeDelay;
        return this;
    }
    public set timeDelay(timeDelay: number  | undefined) {
        this['time_delay'] = timeDelay;
    }
    public get timeDelay(): number | undefined {
        return this['time_delay'];
    }
    public withMax(max: number): RateControl {
        this['max'] = max;
        return this;
    }
}