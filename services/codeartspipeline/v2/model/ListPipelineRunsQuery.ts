

export class ListPipelineRunsQuery {
    public status?: Array<string>;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withStatus(status: Array<string>): ListPipelineRunsQuery {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListPipelineRunsQuery {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListPipelineRunsQuery {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ListPipelineRunsQuery {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipelineRunsQuery {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListPipelineRunsQuery {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListPipelineRunsQuery {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}