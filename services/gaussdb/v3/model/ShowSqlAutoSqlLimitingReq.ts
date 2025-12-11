

export class ShowSqlAutoSqlLimitingReq {
    private 'node_ids'?: Array<string>;
    public constructor() { 
    }
    public withNodeIds(nodeIds: Array<string>): ShowSqlAutoSqlLimitingReq {
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