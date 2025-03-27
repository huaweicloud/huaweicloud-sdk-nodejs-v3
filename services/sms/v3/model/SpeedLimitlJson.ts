

export class SpeedLimitlJson {
    public start?: string;
    public end?: string;
    public speed?: number;
    private 'over_speed_threshold'?: number;
    public constructor(start?: string, end?: string, speed?: number) { 
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
    public withOverSpeedThreshold(overSpeedThreshold: number): SpeedLimitlJson {
        this['over_speed_threshold'] = overSpeedThreshold;
        return this;
    }
    public set overSpeedThreshold(overSpeedThreshold: number  | undefined) {
        this['over_speed_threshold'] = overSpeedThreshold;
    }
    public get overSpeedThreshold(): number | undefined {
        return this['over_speed_threshold'];
    }
}