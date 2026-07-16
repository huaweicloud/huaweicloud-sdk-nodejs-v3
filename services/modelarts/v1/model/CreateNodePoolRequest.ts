import { CreateNodePoolRequestBody } from './CreateNodePoolRequestBody';


export class CreateNodePoolRequest {
    private 'pool_name'?: string;
    public body?: CreateNodePoolRequestBody;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): CreateNodePoolRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: CreateNodePoolRequestBody): CreateNodePoolRequest {
        this['body'] = body;
        return this;
    }
}