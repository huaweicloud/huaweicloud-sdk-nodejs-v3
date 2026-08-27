

export class ExportTenantUpgradeStrategiesRequest {
    private 'strategy_name'?: string;
    private 'strategy_type'?: number;
    private 'is_force_upgrade'?: number;
    public status?: number;
    private 'strategy_priority'?: number;
    public language?: ExportTenantUpgradeStrategiesRequestLanguageEnum | string;
    public constructor(language?: string) { 
        this['language'] = language;
    }
    public withStrategyName(strategyName: string): ExportTenantUpgradeStrategiesRequest {
        this['strategy_name'] = strategyName;
        return this;
    }
    public set strategyName(strategyName: string  | undefined) {
        this['strategy_name'] = strategyName;
    }
    public get strategyName(): string | undefined {
        return this['strategy_name'];
    }
    public withStrategyType(strategyType: number): ExportTenantUpgradeStrategiesRequest {
        this['strategy_type'] = strategyType;
        return this;
    }
    public set strategyType(strategyType: number  | undefined) {
        this['strategy_type'] = strategyType;
    }
    public get strategyType(): number | undefined {
        return this['strategy_type'];
    }
    public withIsForceUpgrade(isForceUpgrade: number): ExportTenantUpgradeStrategiesRequest {
        this['is_force_upgrade'] = isForceUpgrade;
        return this;
    }
    public set isForceUpgrade(isForceUpgrade: number  | undefined) {
        this['is_force_upgrade'] = isForceUpgrade;
    }
    public get isForceUpgrade(): number | undefined {
        return this['is_force_upgrade'];
    }
    public withStatus(status: number): ExportTenantUpgradeStrategiesRequest {
        this['status'] = status;
        return this;
    }
    public withStrategyPriority(strategyPriority: number): ExportTenantUpgradeStrategiesRequest {
        this['strategy_priority'] = strategyPriority;
        return this;
    }
    public set strategyPriority(strategyPriority: number  | undefined) {
        this['strategy_priority'] = strategyPriority;
    }
    public get strategyPriority(): number | undefined {
        return this['strategy_priority'];
    }
    public withLanguage(language: ExportTenantUpgradeStrategiesRequestLanguageEnum | string): ExportTenantUpgradeStrategiesRequest {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportTenantUpgradeStrategiesRequestLanguageEnum {
    ZH_CN = 'zh_CN',
    EN_US = 'en_US'
}
