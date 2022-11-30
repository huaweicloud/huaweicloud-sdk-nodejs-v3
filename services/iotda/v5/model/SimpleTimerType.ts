

export class SimpleTimerType {
    private 'start_time': string | undefined;
    private 'repeat_interval': number | undefined;
    private 'repeat_count': number | undefined;
    public constructor(startTime?: any, repeatInterval?: any, repeatCount?: any) { 
        this['start_time'] = startTime;
        this['repeat_interval'] = repeatInterval;
        this['repeat_count'] = repeatCount;
    }
    public withStartTime(startTime: string): SimpleTimerType {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withRepeatInterval(repeatInterval: number): SimpleTimerType {
        this['repeat_interval'] = repeatInterval;
        return this;
    }
    public set repeatInterval(repeatInterval: number | undefined) {
        this['repeat_interval'] = repeatInterval;
    }
    public get repeatInterval() {
        return this['repeat_interval'];
    }
    public withRepeatCount(repeatCount: number): SimpleTimerType {
        this['repeat_count'] = repeatCount;
        return this;
    }
    public set repeatCount(repeatCount: number | undefined) {
        this['repeat_count'] = repeatCount;
    }
    public get repeatCount() {
        return this['repeat_count'];
    }
}