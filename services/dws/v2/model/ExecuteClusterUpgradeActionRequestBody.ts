

export class ExecuteClusterUpgradeActionRequestBody {
    public action?: string;
    private 'item_id'?: string;
    public constructor(action?: string, itemId?: string) { 
        this['action'] = action;
        this['item_id'] = itemId;
    }
    public withAction(action: string): ExecuteClusterUpgradeActionRequestBody {
        this['action'] = action;
        return this;
    }
    public withItemId(itemId: string): ExecuteClusterUpgradeActionRequestBody {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string  | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId(): string | undefined {
        return this['item_id'];
    }
}