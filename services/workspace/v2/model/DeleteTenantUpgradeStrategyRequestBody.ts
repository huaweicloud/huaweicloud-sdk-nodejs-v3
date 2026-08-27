

export class DeleteTenantUpgradeStrategyRequestBody {
    private 'strategy_ids'?: Array<string>;
    public constructor() { 
    }
    public withStrategyIds(strategyIds: Array<string>): DeleteTenantUpgradeStrategyRequestBody {
        this['strategy_ids'] = strategyIds;
        return this;
    }
    public set strategyIds(strategyIds: Array<string>  | undefined) {
        this['strategy_ids'] = strategyIds;
    }
    public get strategyIds(): Array<string> | undefined {
        return this['strategy_ids'];
    }
}