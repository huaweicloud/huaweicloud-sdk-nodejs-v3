

export class SimpleTimerType {
    private 'start_time'?: string;
    private 'repeat_interval'?: number;
    private 'repeat_count'?: number;
    public constructor(startTime?: string, repeatInterval?: number, repeatCount?: number) { 
        this['start_time'] = startTime;
        this['repeat_interval'] = repeatInterval;
        this['repeat_count'] = repeatCount;
    }
    public withStartTime(startTime: string): SimpleTimerType {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withRepeatInterval(repeatInterval: number): SimpleTimerType {
        this['repeat_interval'] = repeatInterval;
        return this;
    }
    public set repeatInterval(repeatInterval: number  | undefined) {
        this['repeat_interval'] = repeatInterval;
    }
    public get repeatInterval(): number | undefined {
        return this['repeat_interval'];
    }
    public withRepeatCount(repeatCount: number): SimpleTimerType {
        this['repeat_count'] = repeatCount;
        return this;
    }
    public set repeatCount(repeatCount: number  | undefined) {
        this['repeat_count'] = repeatCount;
    }
    public get repeatCount(): number | undefined {
        return this['repeat_count'];
    }
}