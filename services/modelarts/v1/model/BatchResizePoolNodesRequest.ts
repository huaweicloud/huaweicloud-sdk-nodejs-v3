import { BatchResizeRequestBody } from './BatchResizeRequestBody';


export class BatchResizePoolNodesRequest {
    private 'pool_name'?: string;
    public body?: BatchResizeRequestBody;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): BatchResizePoolNodesRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: BatchResizeRequestBody): BatchResizePoolNodesRequest {
        this['body'] = body;
        return this;
    }
}