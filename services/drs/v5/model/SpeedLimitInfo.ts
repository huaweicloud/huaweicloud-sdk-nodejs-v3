

export class SpeedLimitInfo {
    public begin: string;
    public end: string;
    public speed: string;
    public constructor(begin?: any, end?: any, speed?: any) { 
        this['begin'] = begin;
        this['end'] = end;
        this['speed'] = speed;
    }
    public withBegin(begin: string): SpeedLimitInfo {
        this['begin'] = begin;
        return this;
    }
    public withEnd(end: string): SpeedLimitInfo {
        this['end'] = end;
        return this;
    }
    public withSpeed(speed: string): SpeedLimitInfo {
        this['speed'] = speed;
        return this;
    }
}