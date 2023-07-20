

export class CancelSqlRequest {
    private 'cluster_id'?: string;
    private 'sql_id'?: string;
    public constructor(clusterId?: string, sqlId?: string) { 
        this['cluster_id'] = clusterId;
        this['sql_id'] = sqlId;
    }
    public withClusterId(clusterId: string): CancelSqlRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withSqlId(sqlId: string): CancelSqlRequest {
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