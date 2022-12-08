

export class QueryRunListParam {
    public offset?: number;
    public limit: number;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor(limit?: any) { 
        this['limit'] = limit;
    }
    public withOffset(offset: number): QueryRunListParam {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): QueryRunListParam {
        this['limit'] = limit;
        return this;
    }
    public withStartTime(startTime: string): QueryRunListParam {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): QueryRunListParam {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}