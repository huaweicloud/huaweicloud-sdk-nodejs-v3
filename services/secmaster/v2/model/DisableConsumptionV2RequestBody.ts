

export class DisableConsumptionV2RequestBody {
    private 'table_id'?: string;
    public constructor(tableId?: string) { 
        this['table_id'] = tableId;
    }
    public withTableId(tableId: string): DisableConsumptionV2RequestBody {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
}