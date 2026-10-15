

export class DataFilterObjectResp {
    private 'batch_id'?: number;
    public id?: string;
    private 'parent_id'?: string;
    private 'object_name'?: string;
    private 'object_alias_name'?: string;
    private 'object_type'?: string;
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'is_data_filter'?: DataFilterObjectRespIsDataFilterEnum | string;
    private 'data_filter_type'?: string;
    private 'filter_condition'?: string;
    private 'is_synchronized'?: boolean;
    public constructor() { 
    }
    public withBatchId(batchId: number): DataFilterObjectResp {
        this['batch_id'] = batchId;
        return this;
    }
    public set batchId(batchId: number  | undefined) {
        this['batch_id'] = batchId;
    }
    public get batchId(): number | undefined {
        return this['batch_id'];
    }
    public withId(id: string): DataFilterObjectResp {
        this['id'] = id;
        return this;
    }
    public withParentId(parentId: string): DataFilterObjectResp {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withObjectName(objectName: string): DataFilterObjectResp {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withObjectAliasName(objectAliasName: string): DataFilterObjectResp {
        this['object_alias_name'] = objectAliasName;
        return this;
    }
    public set objectAliasName(objectAliasName: string  | undefined) {
        this['object_alias_name'] = objectAliasName;
    }
    public get objectAliasName(): string | undefined {
        return this['object_alias_name'];
    }
    public withObjectType(objectType: string): DataFilterObjectResp {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withDbName(dbName: string): DataFilterObjectResp {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): DataFilterObjectResp {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): DataFilterObjectResp {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withIsDataFilter(isDataFilter: DataFilterObjectRespIsDataFilterEnum | string): DataFilterObjectResp {
        this['is_data_filter'] = isDataFilter;
        return this;
    }
    public set isDataFilter(isDataFilter: DataFilterObjectRespIsDataFilterEnum | string  | undefined) {
        this['is_data_filter'] = isDataFilter;
    }
    public get isDataFilter(): DataFilterObjectRespIsDataFilterEnum | string | undefined {
        return this['is_data_filter'];
    }
    public withDataFilterType(dataFilterType: string): DataFilterObjectResp {
        this['data_filter_type'] = dataFilterType;
        return this;
    }
    public set dataFilterType(dataFilterType: string  | undefined) {
        this['data_filter_type'] = dataFilterType;
    }
    public get dataFilterType(): string | undefined {
        return this['data_filter_type'];
    }
    public withFilterCondition(filterCondition: string): DataFilterObjectResp {
        this['filter_condition'] = filterCondition;
        return this;
    }
    public set filterCondition(filterCondition: string  | undefined) {
        this['filter_condition'] = filterCondition;
    }
    public get filterCondition(): string | undefined {
        return this['filter_condition'];
    }
    public withIsSynchronized(isSynchronized: boolean): DataFilterObjectResp {
        this['is_synchronized'] = isSynchronized;
        return this;
    }
    public set isSynchronized(isSynchronized: boolean  | undefined) {
        this['is_synchronized'] = isSynchronized;
    }
    public get isSynchronized(): boolean | undefined {
        return this['is_synchronized'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataFilterObjectRespIsDataFilterEnum {
    TRUE = 'true',
    FALSE = 'false'
}
