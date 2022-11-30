import { UpdateMemberRequestBody } from './UpdateMemberRequestBody';


export class UpdateMemberRequest {
    private 'member_id': string | undefined;
    private 'pool_id': string | undefined;
    public body?: UpdateMemberRequestBody;
    public constructor(memberId?: any, poolId?: any) { 
        this['member_id'] = memberId;
        this['pool_id'] = poolId;
    }
    public withMemberId(memberId: string): UpdateMemberRequest {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId() {
        return this['member_id'];
    }
    public withPoolId(poolId: string): UpdateMemberRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withBody(body: UpdateMemberRequestBody): UpdateMemberRequest {
        this['body'] = body;
        return this;
    }
}