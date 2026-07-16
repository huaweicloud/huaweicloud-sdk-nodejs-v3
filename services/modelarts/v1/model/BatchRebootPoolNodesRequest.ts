import { BatchRebootPoolNodesRequestBody } from './BatchRebootPoolNodesRequestBody';


export class BatchRebootPoolNodesRequest {
    private 'pool_name'?: string;
    public body?: BatchRebootPoolNodesRequestBody;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): BatchRebootPoolNodesRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: BatchRebootPoolNodesRequestBody): BatchRebootPoolNodesRequest {
        this['body'] = body;
        return this;
    }
}