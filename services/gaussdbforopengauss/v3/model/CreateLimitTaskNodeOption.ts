

export class CreateLimitTaskNodeOption {
    private 'node_id'?: string;
    private 'sql_id'?: string;
    public constructor(nodeId?: string, sqlId?: string) { 
        this['node_id'] = nodeId;
        this['sql_id'] = sqlId;
    }
    public withNodeId(nodeId: string): CreateLimitTaskNodeOption {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withSqlId(sqlId: string): CreateLimitTaskNodeOption {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string  | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId(): string | undefined {
        return this['sql_id'];
    }
}