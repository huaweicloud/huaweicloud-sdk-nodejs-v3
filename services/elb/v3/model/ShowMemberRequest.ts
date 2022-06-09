

export class ShowMemberRequest {
    private 'pool_id': string | undefined;
    private 'member_id': string | undefined;
    public constructor(poolId?: any, memberId?: any) { 
        this['pool_id'] = poolId;
        this['member_id'] = memberId;
    }
    public withPoolId(poolId: string): ShowMemberRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withMemberId(memberId: string): ShowMemberRequest {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId() {
        return this['member_id'];
    }
}