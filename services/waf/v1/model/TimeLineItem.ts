

export class TimeLineItem {
    public time?: number;
    public num?: number;
    public constructor() { 
    }
    public withTime(time: number): TimeLineItem {
        this['time'] = time;
        return this;
    }
    public withNum(num: number): TimeLineItem {
        this['num'] = num;
        return this;
    }
}