

export class PoolHealth {
    private 'minimum_healthy_member_count'?: number;
    public constructor() { 
    }
    public withMinimumHealthyMemberCount(minimumHealthyMemberCount: number): PoolHealth {
        this['minimum_healthy_member_count'] = minimumHealthyMemberCount;
        return this;
    }
    public set minimumHealthyMemberCount(minimumHealthyMemberCount: number  | undefined) {
        this['minimum_healthy_member_count'] = minimumHealthyMemberCount;
    }
    public get minimumHealthyMemberCount(): number | undefined {
        return this['minimum_healthy_member_count'];
    }
}