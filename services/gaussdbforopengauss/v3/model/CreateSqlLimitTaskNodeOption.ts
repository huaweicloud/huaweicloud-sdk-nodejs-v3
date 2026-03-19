

export class CreateSqlLimitTaskNodeOption {
    private 'node_id'?: string;
    private 'sql_ids'?: Array<string>;
    public constructor(nodeId?: string, sqlIds?: Array<string>) { 
        this['node_id'] = nodeId;
        this['sql_ids'] = sqlIds;
    }
    public withNodeId(nodeId: string): CreateSqlLimitTaskNodeOption {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withSqlIds(sqlIds: Array<string>): CreateSqlLimitTaskNodeOption {
        this['sql_ids'] = sqlIds;
        return this;
    }
    public set sqlIds(sqlIds: Array<string>  | undefined) {
        this['sql_ids'] = sqlIds;
    }
    public get sqlIds(): Array<string> | undefined {
        return this['sql_ids'];
    }
}