

export class ShowVodRetrievalRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public interval?: number;
    public constructor() { 
    }
    public withStartTime(startTime: string): ShowVodRetrievalRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowVodRetrievalRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withInterval(interval: number): ShowVodRetrievalRequest {
        this['interval'] = interval;
        return this;
    }
}