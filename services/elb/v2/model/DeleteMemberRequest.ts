

export class DeleteMemberRequest {
    private 'pool_id'?: string;
    private 'member_id'?: string;
    public constructor(poolId?: string, memberId?: string) { 
        this['pool_id'] = poolId;
        this['member_id'] = memberId;
    }
    public withPoolId(poolId: string): DeleteMemberRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withMemberId(memberId: string): DeleteMemberRequest {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
}