

export class ListTableVolumesRequestBody {
    private 'database_name'?: string;
    private 'schema_names'?: Array<string>;
    private 'table_name'?: string;
    private 'user_name'?: string;
    private 'sort_key'?: ListTableVolumesRequestBodySortKeyEnum | string;
    private 'sort_order'?: ListTableVolumesRequestBodySortOrderEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor(databaseName?: string, schemaNames?: Array<string>) { 
        this['database_name'] = databaseName;
        this['schema_names'] = schemaNames;
    }
    public withDatabaseName(databaseName: string): ListTableVolumesRequestBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaNames(schemaNames: Array<string>): ListTableVolumesRequestBody {
        this['schema_names'] = schemaNames;
        return this;
    }
    public set schemaNames(schemaNames: Array<string>  | undefined) {
        this['schema_names'] = schemaNames;
    }
    public get schemaNames(): Array<string> | undefined {
        return this['schema_names'];
    }
    public withTableName(tableName: string): ListTableVolumesRequestBody {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withUserName(userName: string): ListTableVolumesRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withSortKey(sortKey: ListTableVolumesRequestBodySortKeyEnum | string): ListTableVolumesRequestBody {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListTableVolumesRequestBodySortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListTableVolumesRequestBodySortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortOrder(sortOrder: ListTableVolumesRequestBodySortOrderEnum | string): ListTableVolumesRequestBody {
        this['sort_order'] = sortOrder;
        return this;
    }
    public set sortOrder(sortOrder: ListTableVolumesRequestBodySortOrderEnum | string  | undefined) {
        this['sort_order'] = sortOrder;
    }
    public get sortOrder(): ListTableVolumesRequestBodySortOrderEnum | string | undefined {
        return this['sort_order'];
    }
    public withLimit(limit: number): ListTableVolumesRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTableVolumesRequestBody {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTableVolumesRequestBodySortKeyEnum {
    TABLE_SIZE = 'table_size',
    ID = 'id',
    TABLE_NAME = 'table_name',
    TABLE_OWNER = 'table_owner',
    DATABASE_NAME = 'database_name',
    SCHEMA_NAME = 'schema_name',
    IS_PART_TYPE = 'is_part_type',
    IS_HASH_CLUSTER_KEY = 'is_hash_cluster_key',
    TUPLES = 'tuples',
    CREATE_TIME = 'create_time',
    UPDATE_TIME = 'update_time',
    AVERAGE_SIZE = 'average_size',
    MAX_RATIO = 'max_ratio',
    MIN_RATIO = 'min_ratio',
    SKEW_SIZE = 'skew_size',
    SKEW_RATIO = 'skew_ratio',
    SKEW_STDDEV = 'skew_stddev'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTableVolumesRequestBodySortOrderEnum {
    DESC = 'DESC',
    ASC = 'ASC'
}
