

export class ThrottleApiBinding {
    private 'publish_id'?: string;
    public scope?: ThrottleApiBindingScopeEnum | number;
    private 'strategy_id'?: string;
    private 'apply_time'?: Date;
    public id?: string;
    public constructor() { 
    }
    public withPublishId(publishId: string): ThrottleApiBinding {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withScope(scope: ThrottleApiBindingScopeEnum | number): ThrottleApiBinding {
        this['scope'] = scope;
        return this;
    }
    public withStrategyId(strategyId: string): ThrottleApiBinding {
        this['strategy_id'] = strategyId;
        return this;
    }
    public set strategyId(strategyId: string  | undefined) {
        this['strategy_id'] = strategyId;
    }
    public get strategyId(): string | undefined {
        return this['strategy_id'];
    }
    public withApplyTime(applyTime: Date): ThrottleApiBinding {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: Date  | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime(): Date | undefined {
        return this['apply_time'];
    }
    public withId(id: string): ThrottleApiBinding {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ThrottleApiBindingScopeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
