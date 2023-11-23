

export class CassandraSlowLogDetail {
    private 'node_name'?: string;
    private 'node_id'?: string;
    private 'whole_message'?: string;
    private 'operate_type'?: string;
    private 'cost_time'?: number;
    public keyspace?: string;
    public table?: string;
    private 'log_time'?: string;
    private 'line_num'?: string;
    public constructor(nodeName?: string, nodeId?: string, wholeMessage?: string, operateType?: string, costTime?: number, keyspace?: string, table?: string, logTime?: string, lineNum?: string) { 
        this['node_name'] = nodeName;
        this['node_id'] = nodeId;
        this['whole_message'] = wholeMessage;
        this['operate_type'] = operateType;
        this['cost_time'] = costTime;
        this['keyspace'] = keyspace;
        this['table'] = table;
        this['log_time'] = logTime;
        this['line_num'] = lineNum;
    }
    public withNodeName(nodeName: string): CassandraSlowLogDetail {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withNodeId(nodeId: string): CassandraSlowLogDetail {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withWholeMessage(wholeMessage: string): CassandraSlowLogDetail {
        this['whole_message'] = wholeMessage;
        return this;
    }
    public set wholeMessage(wholeMessage: string  | undefined) {
        this['whole_message'] = wholeMessage;
    }
    public get wholeMessage(): string | undefined {
        return this['whole_message'];
    }
    public withOperateType(operateType: string): CassandraSlowLogDetail {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withCostTime(costTime: number): CassandraSlowLogDetail {
        this['cost_time'] = costTime;
        return this;
    }
    public set costTime(costTime: number  | undefined) {
        this['cost_time'] = costTime;
    }
    public get costTime(): number | undefined {
        return this['cost_time'];
    }
    public withKeyspace(keyspace: string): CassandraSlowLogDetail {
        this['keyspace'] = keyspace;
        return this;
    }
    public withTable(table: string): CassandraSlowLogDetail {
        this['table'] = table;
        return this;
    }
    public withLogTime(logTime: string): CassandraSlowLogDetail {
        this['log_time'] = logTime;
        return this;
    }
    public set logTime(logTime: string  | undefined) {
        this['log_time'] = logTime;
    }
    public get logTime(): string | undefined {
        return this['log_time'];
    }
    public withLineNum(lineNum: string): CassandraSlowLogDetail {
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