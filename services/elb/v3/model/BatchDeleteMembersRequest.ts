import { BatchDeleteMemberRequestBody } from './BatchDeleteMemberRequestBody';


export class BatchDeleteMembersRequest {
    private 'pool_id': string | undefined;
    public body?: BatchDeleteMemberRequestBody;
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
    public withBody(body: BatchDeleteMemberRequestBody): BatchDeleteMembersRequest {
        this['body'] = body;
        return this;
    }
}