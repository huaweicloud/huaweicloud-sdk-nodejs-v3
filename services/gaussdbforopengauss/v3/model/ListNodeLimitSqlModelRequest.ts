

export class ListNodeLimitSqlModelRequest {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'sql_model'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, nodeId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
    }
    public withInstanceId(instanceId: string): ListNodeLimitSqlModelRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListNodeLimitSqlModelRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withSqlModel(sqlModel: string): ListNodeLimitSqlModelRequest {
        this['sql_model'] = sqlModel;
        return this;
    }
    public set sqlModel(sqlModel: string  | undefined) {
        this['sql_model'] = sqlModel;
    }
    public get sqlModel(): string | undefined {
        return this['sql_model'];
    }
    public withOffset(offset: number): ListNodeLimitSqlModelRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNodeLimitSqlModelRequest {
        this['limit'] = limit;
        return this;
    }
}