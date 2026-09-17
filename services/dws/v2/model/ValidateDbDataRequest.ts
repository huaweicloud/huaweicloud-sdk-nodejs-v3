import { ValidateDbDataReq } from './ValidateDbDataReq';


export class ValidateDbDataRequest {
    private 'cluster_id'?: string;
    public database?: string;
    public body?: ValidateDbDataReq;
    public constructor(clusterId?: string, database?: string) { 
        this['cluster_id'] = clusterId;
        this['database'] = database;
    }
    public withClusterId(clusterId: string): ValidateDbDataRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDatabase(database: string): ValidateDbDataRequest {
        this['database'] = database;
        return this;
    }
    public withBody(body: ValidateDbDataReq): ValidateDbDataRequest {
        this['body'] = body;
        return this;
    }
}