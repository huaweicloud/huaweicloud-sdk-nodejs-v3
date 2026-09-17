

export class SwitchSqlLimitingRuleNewRequestBody {
    private 'engine_type'?: string;
    private 'item_ids'?: string;
    public action?: string;
    public constructor(engineType?: string, itemIds?: string, action?: string) { 
        this['engine_type'] = engineType;
        this['item_ids'] = itemIds;
        this['action'] = action;
    }
    public withEngineType(engineType: string): SwitchSqlLimitingRuleNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withItemIds(itemIds: string): SwitchSqlLimitingRuleNewRequestBody {
        this['item_ids'] = itemIds;
        return this;
    }
    public set itemIds(itemIds: string  | undefined) {
        this['item_ids'] = itemIds;
    }
    public get itemIds(): string | undefined {
        return this['item_ids'];
    }
    public withAction(action: string): SwitchSqlLimitingRuleNewRequestBody {
        this['action'] = action;
        return this;
    }
}