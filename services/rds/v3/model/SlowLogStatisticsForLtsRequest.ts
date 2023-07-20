

export class SlowLogStatisticsForLtsRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public offset?: number;
    public limit?: number;
    public type?: SlowLogStatisticsForLtsRequestTypeEnum | string;
    public database?: string;
    public sort?: string;
    public order?: SlowLogStatisticsForLtsRequestOrderEnum | string;
    public constructor(startTime?: string, endTime?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: string): SlowLogStatisticsForLtsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): SlowLogStatisticsForLtsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): SlowLogStatisticsForLtsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SlowLogStatisticsForLtsRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: SlowLogStatisticsForLtsRequestTypeEnum | string): SlowLogStatisticsForLtsRequest {
        this['type'] = type;
        return this;
    }
    public withDatabase(database: string): SlowLogStatisticsForLtsRequest {
        this['database'] = database;
        return this;
    }
    public withSort(sort: string): SlowLogStatisticsForLtsRequest {
        this['sort'] = sort;
        return this;
    }
    public withOrder(order: SlowLogStatisticsForLtsRequestOrderEnum | string): SlowLogStatisticsForLtsRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SlowLogStatisticsForLtsRequestTypeEnum {
    INSERT = 'INSERT',
    UPDATE = 'UPDATE',
    SELECT = 'SELECT',
    DELETE = 'DELETE',
    CREATE = 'CREATE',
    ALL = 'ALL'
}
/**
    * @export
    * @enum {string}
    */
export enum SlowLogStatisticsForLtsRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
