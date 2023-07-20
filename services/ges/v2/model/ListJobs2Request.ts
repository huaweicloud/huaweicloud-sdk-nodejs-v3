

export class ListJobs2Request {
    private 'end_time'?: string;
    private 'graph_name'?: string;
    public limit?: string;
    public offset?: string;
    private 'start_time'?: string;
    public status?: string;
    public constructor() { 
    }
    public withEndTime(endTime: string): ListJobs2Request {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withGraphName(graphName: string): ListJobs2Request {
        this['graph_name'] = graphName;
        return this;
    }
    public set graphName(graphName: string  | undefined) {
        this['graph_name'] = graphName;
    }
    public get graphName(): string | undefined {
        return this['graph_name'];
    }
    public withLimit(limit: string): ListJobs2Request {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListJobs2Request {
        this['offset'] = offset;
        return this;
    }
    public withStartTime(startTime: string): ListJobs2Request {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withStatus(status: string): ListJobs2Request {
        this['status'] = status;
        return this;
    }
}