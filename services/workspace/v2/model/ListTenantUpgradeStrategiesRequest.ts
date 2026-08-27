

export class ListTenantUpgradeStrategiesRequest {
    private 'is_accurate_name'?: boolean;
    private 'strategy_name'?: string;
    private 'strategy_type'?: number;
    private 'is_force_upgrade'?: number;
    public status?: number;
    private 'strategy_priority'?: number;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withIsAccurateName(isAccurateName: boolean): ListTenantUpgradeStrategiesRequest {
        this['is_accurate_name'] = isAccurateName;
        return this;
    }
    public set isAccurateName(isAccurateName: boolean  | undefined) {
        this['is_accurate_name'] = isAccurateName;
    }
    public get isAccurateName(): boolean | undefined {
        return this['is_accurate_name'];
    }
    public withStrategyName(strategyName: string): ListTenantUpgradeStrategiesRequest {
        this['strategy_name'] = strategyName;
        return this;
    }
    public set strategyName(strategyName: string  | undefined) {
        this['strategy_name'] = strategyName;
    }
    public get strategyName(): string | undefined {
        return this['strategy_name'];
    }
    public withStrategyType(strategyType: number): ListTenantUpgradeStrategiesRequest {
        this['strategy_type'] = strategyType;
        return this;
    }
    public set strategyType(strategyType: number  | undefined) {
        this['strategy_type'] = strategyType;
    }
    public get strategyType(): number | undefined {
        return this['strategy_type'];
    }
    public withIsForceUpgrade(isForceUpgrade: number): ListTenantUpgradeStrategiesRequest {
        this['is_force_upgrade'] = isForceUpgrade;
        return this;
    }
    public set isForceUpgrade(isForceUpgrade: number  | undefined) {
        this['is_force_upgrade'] = isForceUpgrade;
    }
    public get isForceUpgrade(): number | undefined {
        return this['is_force_upgrade'];
    }
    public withStatus(status: number): ListTenantUpgradeStrategiesRequest {
        this['status'] = status;
        return this;
    }
    public withStrategyPriority(strategyPriority: number): ListTenantUpgradeStrategiesRequest {
        this['strategy_priority'] = strategyPriority;
        return this;
    }
    public set strategyPriority(strategyPriority: number  | undefined) {
        this['strategy_priority'] = strategyPriority;
    }
    public get strategyPriority(): number | undefined {
        return this['strategy_priority'];
    }
    public withOffset(offset: number): ListTenantUpgradeStrategiesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTenantUpgradeStrategiesRequest {
        this['limit'] = limit;
        return this;
    }
}