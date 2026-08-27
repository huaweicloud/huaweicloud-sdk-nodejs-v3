

export class ListApplyObjectsRequest {
    private 'strategy_id'?: string;
    private 'object_name'?: string;
    private 'object_type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(strategyId?: string) { 
        this['strategy_id'] = strategyId;
    }
    public withStrategyId(strategyId: string): ListApplyObjectsRequest {
        this['strategy_id'] = strategyId;
        return this;
    }
    public set strategyId(strategyId: string  | undefined) {
        this['strategy_id'] = strategyId;
    }
    public get strategyId(): string | undefined {
        return this['strategy_id'];
    }
    public withObjectName(objectName: string): ListApplyObjectsRequest {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withObjectType(objectType: string): ListApplyObjectsRequest {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withOffset(offset: number): ListApplyObjectsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApplyObjectsRequest {
        this['limit'] = limit;
        return this;
    }
}