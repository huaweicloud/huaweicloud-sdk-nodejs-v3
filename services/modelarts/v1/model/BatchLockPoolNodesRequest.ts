import { BatchLockPoolNodesRequestBody } from './BatchLockPoolNodesRequestBody';


export class BatchLockPoolNodesRequest {
    private 'pool_name'?: string;
    public body?: BatchLockPoolNodesRequestBody;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): BatchLockPoolNodesRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: BatchLockPoolNodesRequestBody): BatchLockPoolNodesRequest {
        this['body'] = body;
        return this;
    }
}