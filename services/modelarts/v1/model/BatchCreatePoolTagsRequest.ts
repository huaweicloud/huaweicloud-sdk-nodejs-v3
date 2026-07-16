import { CreateTagRequest } from './CreateTagRequest';


export class BatchCreatePoolTagsRequest {
    private 'pool_name'?: string;
    public body?: CreateTagRequest;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): BatchCreatePoolTagsRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: CreateTagRequest): BatchCreatePoolTagsRequest {
        this['body'] = body;
        return this;
    }
}