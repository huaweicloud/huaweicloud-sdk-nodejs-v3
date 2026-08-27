import { UpdateStrategyApplyObjectsRequestBody } from './UpdateStrategyApplyObjectsRequestBody';


export class UpdateStrategyApplyObjectsRequest {
    private 'strategy_id'?: string;
    public body?: UpdateStrategyApplyObjectsRequestBody;
    public constructor(strategyId?: string) { 
        this['strategy_id'] = strategyId;
    }
    public withStrategyId(strategyId: string): UpdateStrategyApplyObjectsRequest {
        this['strategy_id'] = strategyId;
        return this;
    }
    public set strategyId(strategyId: string  | undefined) {
        this['strategy_id'] = strategyId;
    }
    public get strategyId(): string | undefined {
        return this['strategy_id'];
    }
    public withBody(body: UpdateStrategyApplyObjectsRequestBody): UpdateStrategyApplyObjectsRequest {
        this['body'] = body;
        return this;
    }
}