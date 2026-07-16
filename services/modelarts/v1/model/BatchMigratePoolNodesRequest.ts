import { NodeBatchMigrationRequest } from './NodeBatchMigrationRequest';


export class BatchMigratePoolNodesRequest {
    private 'pool_name'?: string;
    public body?: NodeBatchMigrationRequest;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): BatchMigratePoolNodesRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: NodeBatchMigrationRequest): BatchMigratePoolNodesRequest {
        this['body'] = body;
        return this;
    }
}