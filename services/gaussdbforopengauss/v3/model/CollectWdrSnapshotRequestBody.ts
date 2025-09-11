

export class CollectWdrSnapshotRequestBody {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'wdr_type'?: Array<string>;
    public constructor(startTime?: string, endTime?: string, wdrType?: Array<string>) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['wdr_type'] = wdrType;
    }
    public withStartTime(startTime: string): CollectWdrSnapshotRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): CollectWdrSnapshotRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withWdrType(wdrType: Array<string>): CollectWdrSnapshotRequestBody {
        this['wdr_type'] = wdrType;
        return this;
    }
    public set wdrType(wdrType: Array<string>  | undefined) {
        this['wdr_type'] = wdrType;
    }
    public get wdrType(): Array<string> | undefined {
        return this['wdr_type'];
    }
}