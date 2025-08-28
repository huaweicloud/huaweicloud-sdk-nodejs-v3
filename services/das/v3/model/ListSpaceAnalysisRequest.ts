

export class ListSpaceAnalysisRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    private 'object_type'?: ListSpaceAnalysisRequestObjectTypeEnum | string;
    private 'database_id'?: string;
    public offset?: string;
    public limit?: string;
    private 'show_instance_info'?: string;
    private 'datastore_type'?: ListSpaceAnalysisRequestDatastoreTypeEnum | string;
    public constructor(instanceId?: string, objectType?: string, datastoreType?: string) { 
        this['instance_id'] = instanceId;
        this['object_type'] = objectType;
        this['datastore_type'] = datastoreType;
    }
    public withInstanceId(instanceId: string): ListSpaceAnalysisRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): ListSpaceAnalysisRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withObjectType(objectType: ListSpaceAnalysisRequestObjectTypeEnum | string): ListSpaceAnalysisRequest {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: ListSpaceAnalysisRequestObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): ListSpaceAnalysisRequestObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withDatabaseId(databaseId: string): ListSpaceAnalysisRequest {
        this['database_id'] = databaseId;
        return this;
    }
    public set databaseId(databaseId: string  | undefined) {
        this['database_id'] = databaseId;
    }
    public get databaseId(): string | undefined {
        return this['database_id'];
    }
    public withOffset(offset: string): ListSpaceAnalysisRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListSpaceAnalysisRequest {
        this['limit'] = limit;
        return this;
    }
    public withShowInstanceInfo(showInstanceInfo: string): ListSpaceAnalysisRequest {
        this['show_instance_info'] = showInstanceInfo;
        return this;
    }
    public set showInstanceInfo(showInstanceInfo: string  | undefined) {
        this['show_instance_info'] = showInstanceInfo;
    }
    public get showInstanceInfo(): string | undefined {
        return this['show_instance_info'];
    }
    public withDatastoreType(datastoreType: ListSpaceAnalysisRequestDatastoreTypeEnum | string): ListSpaceAnalysisRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ListSpaceAnalysisRequestDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ListSpaceAnalysisRequestDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSpaceAnalysisRequestObjectTypeEnum {
    DATABASE = 'database',
    TABLE = 'table'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSpaceAnalysisRequestDatastoreTypeEnum {
    MYSQL = 'MySQL',
    GAUSSDB_FOR_MYSQL = 'GaussDB(for MySQL)',
    SQLSERVER = 'SQLServer'
}
