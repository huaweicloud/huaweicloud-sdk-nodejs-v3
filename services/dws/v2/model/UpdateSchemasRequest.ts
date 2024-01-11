import { WorkloadSchemaReq } from './WorkloadSchemaReq';


export class UpdateSchemasRequest {
    private 'cluster_id'?: string;
    private 'database_name'?: string;
    public body?: WorkloadSchemaReq;
    public constructor(clusterId?: string, databaseName?: string) { 
        this['cluster_id'] = clusterId;
        this['database_name'] = databaseName;
    }
    public withClusterId(clusterId: string): UpdateSchemasRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDatabaseName(databaseName: string): UpdateSchemasRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withBody(body: WorkloadSchemaReq): UpdateSchemasRequest {
        this['body'] = body;
        return this;
    }
}