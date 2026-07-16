import { ResetNodesRequest } from './ResetNodesRequest';


export class BatchResetPoolNodesRequest {
    private 'pool_name'?: string;
    public body?: ResetNodesRequest;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): BatchResetPoolNodesRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: ResetNodesRequest): BatchResetPoolNodesRequest {
        this['body'] = body;
        return this;
    }
}