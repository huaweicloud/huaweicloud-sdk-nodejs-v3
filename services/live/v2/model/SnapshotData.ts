

export class SnapshotData {
    public count?: number;
    public time?: string;
    public constructor() { 
    }
    public withCount(count: number): SnapshotData {
        this['count'] = count;
        return this;
    }
    public withTime(time: string): SnapshotData {
        this['time'] = time;
        return this;
    }
}