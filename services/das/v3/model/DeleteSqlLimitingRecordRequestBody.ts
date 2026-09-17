

export class DeleteSqlLimitingRecordRequestBody {
    private 'engine_type'?: string;
    private 'item_ids'?: string;
    public constructor(engineType?: string, itemIds?: string) { 
        this['engine_type'] = engineType;
        this['item_ids'] = itemIds;
    }
    public withEngineType(engineType: string): DeleteSqlLimitingRecordRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withItemIds(itemIds: string): DeleteSqlLimitingRecordRequestBody {
        this['item_ids'] = itemIds;
        return this;
    }
    public set itemIds(itemIds: string  | undefined) {
        this['item_ids'] = itemIds;
    }
    public get itemIds(): string | undefined {
        return this['item_ids'];
    }
}