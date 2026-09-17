

export class ShowDdsSlowLogTrendRequestBody {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'node_ids'?: Array<string>;
    public constructor(startTime?: number, endTime?: number) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withStartTime(startTime: number): ShowDdsSlowLogTrendRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowDdsSlowLogTrendRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withNodeIds(nodeIds: Array<string>): ShowDdsSlowLogTrendRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
}