

export class InfluxdbSlowLogDetail {
    private 'node_id'?: string;
    private 'node_name'?: string;
    private 'whole_message'?: string;
    private 'operate_type'?: string;
    private 'cost_time'?: string;
    private 'log_time'?: string;
    public database?: string;
    private 'retention_policy'?: string;
    private 'line_num'?: string;
    public constructor(nodeId?: string, nodeName?: string, wholeMessage?: string, operateType?: string, costTime?: string, logTime?: string, database?: string, retentionPolicy?: string, lineNum?: string) { 
        this['node_id'] = nodeId;
        this['node_name'] = nodeName;
        this['whole_message'] = wholeMessage;
        this['operate_type'] = operateType;
        this['cost_time'] = costTime;
        this['log_time'] = logTime;
        this['database'] = database;
        this['retention_policy'] = retentionPolicy;
        this['line_num'] = lineNum;
    }
    public withNodeId(nodeId: string): InfluxdbSlowLogDetail {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): InfluxdbSlowLogDetail {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withWholeMessage(wholeMessage: string): InfluxdbSlowLogDetail {
        this['whole_message'] = wholeMessage;
        return this;
    }
    public set wholeMessage(wholeMessage: string  | undefined) {
        this['whole_message'] = wholeMessage;
    }
    public get wholeMessage(): string | undefined {
        return this['whole_message'];
    }
    public withOperateType(operateType: string): InfluxdbSlowLogDetail {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withCostTime(costTime: string): InfluxdbSlowLogDetail {
        this['cost_time'] = costTime;
        return this;
    }
    public set costTime(costTime: string  | undefined) {
        this['cost_time'] = costTime;
    }
    public get costTime(): string | undefined {
        return this['cost_time'];
    }
    public withLogTime(logTime: string): InfluxdbSlowLogDetail {
        this['log_time'] = logTime;
        return this;
    }
    public set logTime(logTime: string  | undefined) {
        this['log_time'] = logTime;
    }
    public get logTime(): string | undefined {
        return this['log_time'];
    }
    public withDatabase(database: string): InfluxdbSlowLogDetail {
        this['database'] = database;
        return this;
    }
    public withRetentionPolicy(retentionPolicy: string): InfluxdbSlowLogDetail {
        this['retention_policy'] = retentionPolicy;
        return this;
    }
    public set retentionPolicy(retentionPolicy: string  | undefined) {
        this['retention_policy'] = retentionPolicy;
    }
    public get retentionPolicy(): string | undefined {
        return this['retention_policy'];
    }
    public withLineNum(lineNum: string): InfluxdbSlowLogDetail {
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