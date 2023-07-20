

export class SlowLogDetail {
    private 'node_name'?: string;
    private 'node_id'?: string;
    private 'whole_message'?: string;
    private 'operate_type'?: string;
    private 'cost_time'?: number;
    private 'lock_time'?: number;
    private 'docs_returned'?: number;
    private 'docs_scanned'?: number;
    public database?: string;
    public collection?: string;
    private 'log_time'?: string;
    private 'line_num'?: string;
    public constructor(nodeName?: string, nodeId?: string, wholeMessage?: string, operateType?: string, costTime?: number, lockTime?: number, docsReturned?: number, docsScanned?: number, database?: string, collection?: string, logTime?: string, lineNum?: string) { 
        this['node_name'] = nodeName;
        this['node_id'] = nodeId;
        this['whole_message'] = wholeMessage;
        this['operate_type'] = operateType;
        this['cost_time'] = costTime;
        this['lock_time'] = lockTime;
        this['docs_returned'] = docsReturned;
        this['docs_scanned'] = docsScanned;
        this['database'] = database;
        this['collection'] = collection;
        this['log_time'] = logTime;
        this['line_num'] = lineNum;
    }
    public withNodeName(nodeName: string): SlowLogDetail {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withNodeId(nodeId: string): SlowLogDetail {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withWholeMessage(wholeMessage: string): SlowLogDetail {
        this['whole_message'] = wholeMessage;
        return this;
    }
    public set wholeMessage(wholeMessage: string  | undefined) {
        this['whole_message'] = wholeMessage;
    }
    public get wholeMessage(): string | undefined {
        return this['whole_message'];
    }
    public withOperateType(operateType: string): SlowLogDetail {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withCostTime(costTime: number): SlowLogDetail {
        this['cost_time'] = costTime;
        return this;
    }
    public set costTime(costTime: number  | undefined) {
        this['cost_time'] = costTime;
    }
    public get costTime(): number | undefined {
        return this['cost_time'];
    }
    public withLockTime(lockTime: number): SlowLogDetail {
        this['lock_time'] = lockTime;
        return this;
    }
    public set lockTime(lockTime: number  | undefined) {
        this['lock_time'] = lockTime;
    }
    public get lockTime(): number | undefined {
        return this['lock_time'];
    }
    public withDocsReturned(docsReturned: number): SlowLogDetail {
        this['docs_returned'] = docsReturned;
        return this;
    }
    public set docsReturned(docsReturned: number  | undefined) {
        this['docs_returned'] = docsReturned;
    }
    public get docsReturned(): number | undefined {
        return this['docs_returned'];
    }
    public withDocsScanned(docsScanned: number): SlowLogDetail {
        this['docs_scanned'] = docsScanned;
        return this;
    }
    public set docsScanned(docsScanned: number  | undefined) {
        this['docs_scanned'] = docsScanned;
    }
    public get docsScanned(): number | undefined {
        return this['docs_scanned'];
    }
    public withDatabase(database: string): SlowLogDetail {
        this['database'] = database;
        return this;
    }
    public withCollection(collection: string): SlowLogDetail {
        this['collection'] = collection;
        return this;
    }
    public withLogTime(logTime: string): SlowLogDetail {
        this['log_time'] = logTime;
        return this;
    }
    public set logTime(logTime: string  | undefined) {
        this['log_time'] = logTime;
    }
    public get logTime(): string | undefined {
        return this['log_time'];
    }
    public withLineNum(lineNum: string): SlowLogDetail {
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