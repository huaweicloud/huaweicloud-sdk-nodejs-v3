

export class MongodbErrorLogDetail {
    private 'node_name'?: string;
    private 'node_id'?: string;
    private 'raw_message'?: string;
    public severity?: string;
    private 'log_time'?: string;
    private 'line_num'?: string;
    public constructor(nodeName?: string, nodeId?: string, rawMessage?: string, severity?: string, logTime?: string, lineNum?: string) { 
        this['node_name'] = nodeName;
        this['node_id'] = nodeId;
        this['raw_message'] = rawMessage;
        this['severity'] = severity;
        this['log_time'] = logTime;
        this['line_num'] = lineNum;
    }
    public withNodeName(nodeName: string): MongodbErrorLogDetail {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withNodeId(nodeId: string): MongodbErrorLogDetail {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withRawMessage(rawMessage: string): MongodbErrorLogDetail {
        this['raw_message'] = rawMessage;
        return this;
    }
    public set rawMessage(rawMessage: string  | undefined) {
        this['raw_message'] = rawMessage;
    }
    public get rawMessage(): string | undefined {
        return this['raw_message'];
    }
    public withSeverity(severity: string): MongodbErrorLogDetail {
        this['severity'] = severity;
        return this;
    }
    public withLogTime(logTime: string): MongodbErrorLogDetail {
        this['log_time'] = logTime;
        return this;
    }
    public set logTime(logTime: string  | undefined) {
        this['log_time'] = logTime;
    }
    public get logTime(): string | undefined {
        return this['log_time'];
    }
    public withLineNum(lineNum: string): MongodbErrorLogDetail {
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