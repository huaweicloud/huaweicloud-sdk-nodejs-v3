

export class UploadHistorySessionAnalyaseBody {
    public type?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor(type?: string, startTime?: number, endTime?: number) { 
        this['type'] = type;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withType(type: string): UploadHistorySessionAnalyaseBody {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: number): UploadHistorySessionAnalyaseBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): UploadHistorySessionAnalyaseBody {
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