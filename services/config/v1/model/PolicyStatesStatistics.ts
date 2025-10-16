

export class PolicyStatesStatistics {
    private 'total_resource_count'?: number;
    private 'non_compliant_resource_count'?: number;
    private 'total_policy_count'?: number;
    private 'non_compliant_policy_count'?: number;
    private 'statistic_date'?: string;
    public constructor() { 
    }
    public withTotalResourceCount(totalResourceCount: number): PolicyStatesStatistics {
        this['total_resource_count'] = totalResourceCount;
        return this;
    }
    public set totalResourceCount(totalResourceCount: number  | undefined) {
        this['total_resource_count'] = totalResourceCount;
    }
    public get totalResourceCount(): number | undefined {
        return this['total_resource_count'];
    }
    public withNonCompliantResourceCount(nonCompliantResourceCount: number): PolicyStatesStatistics {
        this['non_compliant_resource_count'] = nonCompliantResourceCount;
        return this;
    }
    public set nonCompliantResourceCount(nonCompliantResourceCount: number  | undefined) {
        this['non_compliant_resource_count'] = nonCompliantResourceCount;
    }
    public get nonCompliantResourceCount(): number | undefined {
        return this['non_compliant_resource_count'];
    }
    public withTotalPolicyCount(totalPolicyCount: number): PolicyStatesStatistics {
        this['total_policy_count'] = totalPolicyCount;
        return this;
    }
    public set totalPolicyCount(totalPolicyCount: number  | undefined) {
        this['total_policy_count'] = totalPolicyCount;
    }
    public get totalPolicyCount(): number | undefined {
        return this['total_policy_count'];
    }
    public withNonCompliantPolicyCount(nonCompliantPolicyCount: number): PolicyStatesStatistics {
        this['non_compliant_policy_count'] = nonCompliantPolicyCount;
        return this;
    }
    public set nonCompliantPolicyCount(nonCompliantPolicyCount: number  | undefined) {
        this['non_compliant_policy_count'] = nonCompliantPolicyCount;
    }
    public get nonCompliantPolicyCount(): number | undefined {
        return this['non_compliant_policy_count'];
    }
    public withStatisticDate(statisticDate: string): PolicyStatesStatistics {
        this['statistic_date'] = statisticDate;
        return this;
    }
    public set statisticDate(statisticDate: string  | undefined) {
        this['statistic_date'] = statisticDate;
    }
    public get statisticDate(): string | undefined {
        return this['statistic_date'];
    }
}