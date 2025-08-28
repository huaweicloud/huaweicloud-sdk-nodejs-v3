

export class StartAutoCreateSnapshotsReq {
    public indices?: string;
    public keepday?: number;
    public frequency?: string;
    public period?: string;
    public prefix?: string;
    public constructor(keepday?: number, period?: string, prefix?: string) { 
        this['keepday'] = keepday;
        this['period'] = period;
        this['prefix'] = prefix;
    }
    public withIndices(indices: string): StartAutoCreateSnapshotsReq {
        this['indices'] = indices;
        return this;
    }
    public withKeepday(keepday: number): StartAutoCreateSnapshotsReq {
        this['keepday'] = keepday;
        return this;
    }
    public withFrequency(frequency: string): StartAutoCreateSnapshotsReq {
        this['frequency'] = frequency;
        return this;
    }
    public withPeriod(period: string): StartAutoCreateSnapshotsReq {
        this['period'] = period;
        return this;
    }
    public withPrefix(prefix: string): StartAutoCreateSnapshotsReq {
        this['prefix'] = prefix;
        return this;
    }
}