

export class ListUnusedDesktopsRequest {
    public offset?: number;
    public limit?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListUnusedDesktopsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUnusedDesktopsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStartTime(startTime: string): ListUnusedDesktopsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListUnusedDesktopsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}