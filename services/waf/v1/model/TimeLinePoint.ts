

export class TimeLinePoint {
    public time?: number;
    public num?: number;
    public constructor(time?: number, num?: number) { 
        this['time'] = time;
        this['num'] = num;
    }
    public withTime(time: number): TimeLinePoint {
        this['time'] = time;
        return this;
    }
    public withNum(num: number): TimeLinePoint {
        this['num'] = num;
        return this;
    }
}