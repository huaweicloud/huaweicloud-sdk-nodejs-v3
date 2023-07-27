

export class ThrottleApiBindingCreate {
    private 'strategy_id'?: string;
    private 'publish_ids'?: Array<string>;
    public constructor(strategyId?: string, publishIds?: Array<string>) { 
        this['strategy_id'] = strategyId;
        this['publish_ids'] = publishIds;
    }
    public withStrategyId(strategyId: string): ThrottleApiBindingCreate {
        this['strategy_id'] = strategyId;
        return this;
    }
    public set strategyId(strategyId: string  | undefined) {
        this['strategy_id'] = strategyId;
    }
    public get strategyId(): string | undefined {
        return this['strategy_id'];
    }
    public withPublishIds(publishIds: Array<string>): ThrottleApiBindingCreate {
        this['publish_ids'] = publishIds;
        return this;
    }
    public set publishIds(publishIds: Array<string>  | undefined) {
        this['publish_ids'] = publishIds;
    }
    public get publishIds(): Array<string> | undefined {
        return this['publish_ids'];
    }
}