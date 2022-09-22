

export class SpeedLimitlJson {
    public start: string;
    public end: string;
    public speed: number;
    public constructor(start?: any, end?: any, speed?: any) { 
        this['start'] = start;
        this['end'] = end;
        this['speed'] = speed;
    }
    public withStart(start: string): SpeedLimitlJson {
        this['start'] = start;
        return this;
    }
    public withEnd(end: string): SpeedLimitlJson {
        this['end'] = end;
        return this;
    }
    public withSpeed(speed: number): SpeedLimitlJson {
        this['speed'] = speed;
        return this;
    }
}