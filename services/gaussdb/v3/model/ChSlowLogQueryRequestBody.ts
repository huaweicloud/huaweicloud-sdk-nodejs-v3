

export class ChSlowLogQueryRequestBody {
    private 'node_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    private 'line_num'?: string;
    private 'operate_type'?: string;
    public database?: string;
    public constructor(nodeId?: string, startTime?: string, endTime?: string, limit?: number) { 
        this['node_id'] = nodeId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['limit'] = limit;
    }
    public withNodeId(nodeId: string): ChSlowLogQueryRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartTime(startTime: string): ChSlowLogQueryRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ChSlowLogQueryRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ChSlowLogQueryRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withLineNum(lineNum: string): ChSlowLogQueryRequestBody {
        this['line_num'] = lineNum;
        return this;
    }
    public set lineNum(lineNum: string  | undefined) {
        this['line_num'] = lineNum;
    }
    public get lineNum(): string | undefined {
        return this['line_num'];
    }
    public withOperateType(operateType: string): ChSlowLogQueryRequestBody {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withDatabase(database: string): ChSlowLogQueryRequestBody {
        this['database'] = database;
        return this;
    }
}