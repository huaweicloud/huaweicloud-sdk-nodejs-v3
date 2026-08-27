import { UpdateTenantUpgradeStrategyRequestBody } from './UpdateTenantUpgradeStrategyRequestBody';


export class UpdateTenantUpgradeStrategyRequest {
    private 'strategy_id'?: string;
    public body?: UpdateTenantUpgradeStrategyRequestBody;
    public constructor(strategyId?: string) { 
        this['strategy_id'] = strategyId;
    }
    public withStrategyId(strategyId: string): UpdateTenantUpgradeStrategyRequest {
        this['strategy_id'] = strategyId;
        return this;
    }
    public set strategyId(strategyId: string  | undefined) {
        this['strategy_id'] = strategyId;
    }
    public get strategyId(): string | undefined {
        return this['strategy_id'];
    }
    public withBody(body: UpdateTenantUpgradeStrategyRequestBody): UpdateTenantUpgradeStrategyRequest {
        this['body'] = body;
        return this;
    }
}