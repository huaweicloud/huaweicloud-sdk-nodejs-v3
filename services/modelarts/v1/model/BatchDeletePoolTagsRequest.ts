import { DeleteTagRequest } from './DeleteTagRequest';


export class BatchDeletePoolTagsRequest {
    private 'pool_name'?: string;
    public body?: DeleteTagRequest;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): BatchDeletePoolTagsRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: DeleteTagRequest): BatchDeletePoolTagsRequest {
        this['body'] = body;
        return this;
    }
}