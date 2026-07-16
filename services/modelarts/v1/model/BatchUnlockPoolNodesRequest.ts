import { BatchLockPoolNodesRequestBody } from './BatchLockPoolNodesRequestBody';


export class BatchUnlockPoolNodesRequest {
    private 'pool_name'?: string;
    public body?: BatchLockPoolNodesRequestBody;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): BatchUnlockPoolNodesRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: BatchLockPoolNodesRequestBody): BatchUnlockPoolNodesRequest {
        this['body'] = body;
        return this;
    }
}