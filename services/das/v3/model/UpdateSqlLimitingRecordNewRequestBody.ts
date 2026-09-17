

export class UpdateSqlLimitingRecordNewRequestBody {
    private 'engine_type'?: string;
    private 'item_ids'?: string;
    private 'max_connection'?: number;
    private 'max_waiting'?: number;
    public constructor(engineType?: string) { 
        this['engine_type'] = engineType;
    }
    public withEngineType(engineType: string): UpdateSqlLimitingRecordNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withItemIds(itemIds: string): UpdateSqlLimitingRecordNewRequestBody {
        this['item_ids'] = itemIds;
        return this;
    }
    public set itemIds(itemIds: string  | undefined) {
        this['item_ids'] = itemIds;
    }
    public get itemIds(): string | undefined {
        return this['item_ids'];
    }
    public withMaxConnection(maxConnection: number): UpdateSqlLimitingRecordNewRequestBody {
        this['max_connection'] = maxConnection;
        return this;
    }
    public set maxConnection(maxConnection: number  | undefined) {
        this['max_connection'] = maxConnection;
    }
    public get maxConnection(): number | undefined {
        return this['max_connection'];
    }
    public withMaxWaiting(maxWaiting: number): UpdateSqlLimitingRecordNewRequestBody {
        this['max_waiting'] = maxWaiting;
        return this;
    }
    public set maxWaiting(maxWaiting: number  | undefined) {
        this['max_waiting'] = maxWaiting;
    }
    public get maxWaiting(): number | undefined {
        return this['max_waiting'];
    }
}