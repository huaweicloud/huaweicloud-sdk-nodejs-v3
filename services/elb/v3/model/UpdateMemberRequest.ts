import { UpdateMemberRequestBody } from './UpdateMemberRequestBody';


export class UpdateMemberRequest {
    private 'member_id'?: string;
    private 'pool_id'?: string;
    public body?: UpdateMemberRequestBody;
    public constructor(memberId?: string, poolId?: string) { 
        this['member_id'] = memberId;
        this['pool_id'] = poolId;
    }
    public withMemberId(memberId: string): UpdateMemberRequest {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withPoolId(poolId: string): UpdateMemberRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: UpdateMemberRequestBody): UpdateMemberRequest {
        this['body'] = body;
        return this;
    }
}