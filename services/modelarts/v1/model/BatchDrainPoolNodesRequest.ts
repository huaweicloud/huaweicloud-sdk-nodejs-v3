import { BatchDrainPoolNodesReq } from './BatchDrainPoolNodesReq';


export class BatchDrainPoolNodesRequest {
    private 'pool_name'?: string;
    public body?: BatchDrainPoolNodesReq;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): BatchDrainPoolNodesRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: BatchDrainPoolNodesReq): BatchDrainPoolNodesRequest {
        this['body'] = body;
        return this;
    }
}