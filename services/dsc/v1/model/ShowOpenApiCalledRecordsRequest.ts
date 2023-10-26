

export class ShowOpenApiCalledRecordsRequest {
    public limit?: number;
    private 'called_url'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ShowOpenApiCalledRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withCalledUrl(calledUrl: string): ShowOpenApiCalledRecordsRequest {
        this['called_url'] = calledUrl;
        return this;
    }
    public set calledUrl(calledUrl: string  | undefined) {
        this['called_url'] = calledUrl;
    }
    public get calledUrl(): string | undefined {
        return this['called_url'];
    }
    public withStartTime(startTime: number): ShowOpenApiCalledRecordsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowOpenApiCalledRecordsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withMarker(marker: string): ShowOpenApiCalledRecordsRequest {
        this['marker'] = marker;
        return this;
    }
}