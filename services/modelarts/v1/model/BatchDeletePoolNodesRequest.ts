import { NodesDeletionRequest } from './NodesDeletionRequest';


export class BatchDeletePoolNodesRequest {
    private 'pool_name'?: string;
    public body?: NodesDeletionRequest;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): BatchDeletePoolNodesRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: NodesDeletionRequest): BatchDeletePoolNodesRequest {
        this['body'] = body;
        return this;
    }
}