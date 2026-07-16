import { BatchBindPoolNodesReq } from './BatchBindPoolNodesReq';


export class BatchBindPoolNodesRequest {
    private 'pool_name'?: string;
    public body?: BatchBindPoolNodesReq;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): BatchBindPoolNodesRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: BatchBindPoolNodesReq): BatchBindPoolNodesRequest {
        this['body'] = body;
        return this;
    }
}