

export class ShowSlowLogStatisticsRequestBody {
    public limit?: number;
    public offset?: number;
    private 'node_id'?: string;
    public type?: string;
    public database?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public sort?: string;
    public order?: string;
    public constructor(nodeId?: string, startTime?: string, endTime?: string) { 
        this['node_id'] = nodeId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withLimit(limit: number): ShowSlowLogStatisticsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowSlowLogStatisticsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withNodeId(nodeId: string): ShowSlowLogStatisticsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withType(type: string): ShowSlowLogStatisticsRequestBody {
        this['type'] = type;
        return this;
    }
    public withDatabase(database: string): ShowSlowLogStatisticsRequestBody {
        this['database'] = database;
        return this;
    }
    public withStartTime(startTime: string): ShowSlowLogStatisticsRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowSlowLogStatisticsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withSort(sort: string): ShowSlowLogStatisticsRequestBody {
        this['sort'] = sort;
        return this;
    }
    public withOrder(order: string): ShowSlowLogStatisticsRequestBody {
        this['order'] = order;
        return this;
    }
}