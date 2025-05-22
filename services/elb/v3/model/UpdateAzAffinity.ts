

export class UpdateAzAffinity {
    public enable?: boolean;
    private 'az_minimum_healthy_member_percentage'?: number;
    private 'az_minimum_healthy_member_count'?: number;
    private 'az_unhealthy_fallback_strategy'?: string;
    public constructor() { 
    }
    public withEnable(enable: boolean): UpdateAzAffinity {
        this['enable'] = enable;
        return this;
    }
    public withAzMinimumHealthyMemberPercentage(azMinimumHealthyMemberPercentage: number): UpdateAzAffinity {
        this['az_minimum_healthy_member_percentage'] = azMinimumHealthyMemberPercentage;
        return this;
    }
    public set azMinimumHealthyMemberPercentage(azMinimumHealthyMemberPercentage: number  | undefined) {
        this['az_minimum_healthy_member_percentage'] = azMinimumHealthyMemberPercentage;
    }
    public get azMinimumHealthyMemberPercentage(): number | undefined {
        return this['az_minimum_healthy_member_percentage'];
    }
    public withAzMinimumHealthyMemberCount(azMinimumHealthyMemberCount: number): UpdateAzAffinity {
        this['az_minimum_healthy_member_count'] = azMinimumHealthyMemberCount;
        return this;
    }
    public set azMinimumHealthyMemberCount(azMinimumHealthyMemberCount: number  | undefined) {
        this['az_minimum_healthy_member_count'] = azMinimumHealthyMemberCount;
    }
    public get azMinimumHealthyMemberCount(): number | undefined {
        return this['az_minimum_healthy_member_count'];
    }
    public withAzUnhealthyFallbackStrategy(azUnhealthyFallbackStrategy: string): UpdateAzAffinity {
        this['az_unhealthy_fallback_strategy'] = azUnhealthyFallbackStrategy;
        return this;
    }
    public set azUnhealthyFallbackStrategy(azUnhealthyFallbackStrategy: string  | undefined) {
        this['az_unhealthy_fallback_strategy'] = azUnhealthyFallbackStrategy;
    }
    public get azUnhealthyFallbackStrategy(): string | undefined {
        return this['az_unhealthy_fallback_strategy'];
    }
}