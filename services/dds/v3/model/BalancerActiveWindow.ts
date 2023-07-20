

export class BalancerActiveWindow {
    private 'start_time'?: string;
    private 'stop_time'?: string;
    public constructor() { 
    }
    public withStartTime(startTime: string): BalancerActiveWindow {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withStopTime(stopTime: string): BalancerActiveWindow {
        this['stop_time'] = stopTime;
        return this;
    }
    public set stopTime(stopTime: string  | undefined) {
        this['stop_time'] = stopTime;
    }
    public get stopTime(): string | undefined {
        return this['stop_time'];
    }
}