import { BatchCreateMembersRequestBody } from './BatchCreateMembersRequestBody';


export class BatchCreateMembersRequest {
    private 'pool_id': string | undefined;
    public body?: BatchCreateMembersRequestBody;
    public constructor(poolId?: any) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): BatchCreateMembersRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withBody(body: BatchCreateMembersRequestBody): BatchCreateMembersRequest {
        this['body'] = body;
        return this;
    }
}