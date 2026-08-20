

export class WdrSnapshotRecord {
    public id?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor(id?: string, startTime?: number, endTime?: number) { 
        this['id'] = id;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withId(id: string): WdrSnapshotRecord {
        this['id'] = id;
        return this;
    }
    public withStartTime(startTime: number): WdrSnapshotRecord {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): WdrSnapshotRecord {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}