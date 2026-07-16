import { BatchUpdatePoolNodesRequestBody } from './BatchUpdatePoolNodesRequestBody';


export class BatchUpdatePoolNodesRequest {
    private 'pool_name'?: string;
    public body?: BatchUpdatePoolNodesRequestBody;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): BatchUpdatePoolNodesRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: BatchUpdatePoolNodesRequestBody): BatchUpdatePoolNodesRequest {
        this['body'] = body;
        return this;
    }
}