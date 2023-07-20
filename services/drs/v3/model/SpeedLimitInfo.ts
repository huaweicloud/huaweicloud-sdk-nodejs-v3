

export class SpeedLimitInfo {
    public begin?: string;
    public end?: string;
    public speed?: string;
    private 'is_utc'?: boolean;
    public constructor(begin?: string, end?: string, speed?: string) { 
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
    public withIsUtc(isUtc: boolean): SpeedLimitInfo {
        this['is_utc'] = isUtc;
        return this;
    }
    public set isUtc(isUtc: boolean  | undefined) {
        this['is_utc'] = isUtc;
    }
    public get isUtc(): boolean | undefined {
        return this['is_utc'];
    }
}