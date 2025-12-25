

export class ShowMetricStatsRequestBody {
    private 'dataspace_id'?: string;
    private 'end_timestamp'?: number;
    private 'pipe_id'?: string;
    private 'start_timestamp'?: number;
    public constructor(dataspaceId?: string, endTimestamp?: number, pipeId?: string, startTimestamp?: number) { 
        this['dataspace_id'] = dataspaceId;
        this['end_timestamp'] = endTimestamp;
        this['pipe_id'] = pipeId;
        this['start_timestamp'] = startTimestamp;
    }
    public withDataspaceId(dataspaceId: string): ShowMetricStatsRequestBody {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withEndTimestamp(endTimestamp: number): ShowMetricStatsRequestBody {
        this['end_timestamp'] = endTimestamp;
        return this;
    }
    public set endTimestamp(endTimestamp: number  | undefined) {
        this['end_timestamp'] = endTimestamp;
    }
    public get endTimestamp(): number | undefined {
        return this['end_timestamp'];
    }
    public withPipeId(pipeId: string): ShowMetricStatsRequestBody {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withStartTimestamp(startTimestamp: number): ShowMetricStatsRequestBody {
        this['start_timestamp'] = startTimestamp;
        return this;
    }
    public set startTimestamp(startTimestamp: number  | undefined) {
        this['start_timestamp'] = startTimestamp;
    }
    public get startTimestamp(): number | undefined {
        return this['start_timestamp'];
    }
}