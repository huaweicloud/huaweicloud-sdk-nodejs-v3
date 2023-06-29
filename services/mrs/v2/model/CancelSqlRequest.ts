

export class CancelSqlRequest {
    private 'cluster_id': string | undefined;
    private 'sql_id': string | undefined;
    public constructor(clusterId?: any, sqlId?: any) { 
        this['cluster_id'] = clusterId;
        this['sql_id'] = sqlId;
    }
    public withClusterId(clusterId: string): CancelSqlRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withSqlId(sqlId: string): CancelSqlRequest {
        this['sql_id'] = sqlId;
        return this;
    }
    public set sqlId(sqlId: string | undefined) {
        this['sql_id'] = sqlId;
    }
    public get sqlId() {
        return this['sql_id'];
    }
}