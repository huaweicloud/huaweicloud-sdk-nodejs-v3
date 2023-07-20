

export class ColumnObject {
    private 'sync_type'?: string;
    private 'primary_key_for_data_filtering'?: string;
    private 'index_for_data_filtering'?: string;
    public name?: string;
    public type?: string;
    private 'primary_key_for_column_filtering'?: string;
    public filtered?: boolean;
    public additional?: boolean;
    private 'operation_type'?: string;
    public value?: string;
    public constructor() { 
    }
    public withSyncType(syncType: string): ColumnObject {
        this['sync_type'] = syncType;
        return this;
    }
    public set syncType(syncType: string  | undefined) {
        this['sync_type'] = syncType;
    }
    public get syncType(): string | undefined {
        return this['sync_type'];
    }
    public withPrimaryKeyForDataFiltering(primaryKeyForDataFiltering: string): ColumnObject {
        this['primary_key_for_data_filtering'] = primaryKeyForDataFiltering;
        return this;
    }
    public set primaryKeyForDataFiltering(primaryKeyForDataFiltering: string  | undefined) {
        this['primary_key_for_data_filtering'] = primaryKeyForDataFiltering;
    }
    public get primaryKeyForDataFiltering(): string | undefined {
        return this['primary_key_for_data_filtering'];
    }
    public withIndexForDataFiltering(indexForDataFiltering: string): ColumnObject {
        this['index_for_data_filtering'] = indexForDataFiltering;
        return this;
    }
    public set indexForDataFiltering(indexForDataFiltering: string  | undefined) {
        this['index_for_data_filtering'] = indexForDataFiltering;
    }
    public get indexForDataFiltering(): string | undefined {
        return this['index_for_data_filtering'];
    }
    public withName(name: string): ColumnObject {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ColumnObject {
        this['type'] = type;
        return this;
    }
    public withPrimaryKeyForColumnFiltering(primaryKeyForColumnFiltering: string): ColumnObject {
        this['primary_key_for_column_filtering'] = primaryKeyForColumnFiltering;
        return this;
    }
    public set primaryKeyForColumnFiltering(primaryKeyForColumnFiltering: string  | undefined) {
        this['primary_key_for_column_filtering'] = primaryKeyForColumnFiltering;
    }
    public get primaryKeyForColumnFiltering(): string | undefined {
        return this['primary_key_for_column_filtering'];
    }
    public withFiltered(filtered: boolean): ColumnObject {
        this['filtered'] = filtered;
        return this;
    }
    public withAdditional(additional: boolean): ColumnObject {
        this['additional'] = additional;
        return this;
    }
    public withOperationType(operationType: string): ColumnObject {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
    public withValue(value: string): ColumnObject {
        this['value'] = value;
        return this;
    }
}