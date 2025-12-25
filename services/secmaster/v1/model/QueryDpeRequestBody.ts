

export class QueryDpeRequestBody {
    public status?: string;
    public name?: string;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    public offset?: number;
    public limit?: number;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withStatus(status: string): QueryDpeRequestBody {
        this['status'] = status;
        return this;
    }
    public withName(name: string): QueryDpeRequestBody {
        this['name'] = name;
        return this;
    }
    public withStartTime(startTime: Date): QueryDpeRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): QueryDpeRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): QueryDpeRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): QueryDpeRequestBody {
        this['limit'] = limit;
        return this;
    }
}