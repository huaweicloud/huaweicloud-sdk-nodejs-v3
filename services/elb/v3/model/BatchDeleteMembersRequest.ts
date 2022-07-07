import { BatchDeleteMembersRequestBody } from './BatchDeleteMembersRequestBody';


export class BatchDeleteMembersRequest {
    private 'pool_id': string | undefined;
    public body?: BatchDeleteMembersRequestBody;
    public constructor(poolId?: any) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): BatchDeleteMembersRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withBody(body: BatchDeleteMembersRequestBody): BatchDeleteMembersRequest {
        this['body'] = body;
        return this;
    }
}