

export class HtapErrorLogQueryRequestBody {
    private 'node_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public level?: string;
    public limit?: number;
    private 'line_num'?: string;
    public constructor(nodeId?: string, startTime?: string, endTime?: string, level?: string, limit?: number) { 
        this['node_id'] = nodeId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['level'] = level;
        this['limit'] = limit;
    }
    public withNodeId(nodeId: string): HtapErrorLogQueryRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartTime(startTime: string): HtapErrorLogQueryRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): HtapErrorLogQueryRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLevel(level: string): HtapErrorLogQueryRequestBody {
        this['level'] = level;
        return this;
    }
    public withLimit(limit: number): HtapErrorLogQueryRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withLineNum(lineNum: string): HtapErrorLogQueryRequestBody {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
}