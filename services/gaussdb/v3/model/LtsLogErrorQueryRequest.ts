

export class LtsLogErrorQueryRequest {
    private 'node_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    private 'line_num'?: string;
    public level?: string;
    public constructor(nodeId?: string, startTime?: string, endTime?: string, limit?: number) { 
        this['node_id'] = nodeId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['limit'] = limit;
    }
    public withNodeId(nodeId: string): LtsLogErrorQueryRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartTime(startTime: string): LtsLogErrorQueryRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): LtsLogErrorQueryRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): LtsLogErrorQueryRequest {
        this['limit'] = limit;
        return this;
    }
    public withLineNum(lineNum: string): LtsLogErrorQueryRequest {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withLevel(level: string): LtsLogErrorQueryRequest {
        this['level'] = level;
        return this;
    }
}