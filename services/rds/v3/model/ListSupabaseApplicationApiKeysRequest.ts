

export class ListSupabaseApplicationApiKeysRequest {
    private 'X-Language'?: ListSupabaseApplicationApiKeysRequestXLanguageEnum | string;
    private 'application_id'?: string;
    public name?: string;
    public id?: string;
    public status?: ListSupabaseApplicationApiKeysRequestStatusEnum | string;
    public type?: ListSupabaseApplicationApiKeysRequestTypeEnum | string;
    private 'start_created_time'?: string;
    private 'end_created_time'?: string;
    private 'sort_key'?: ListSupabaseApplicationApiKeysRequestSortKeyEnum | string;
    private 'sort_dir'?: ListSupabaseApplicationApiKeysRequestSortDirEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(applicationId?: string) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: ListSupabaseApplicationApiKeysRequestXLanguageEnum | string): ListSupabaseApplicationApiKeysRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSupabaseApplicationApiKeysRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSupabaseApplicationApiKeysRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ListSupabaseApplicationApiKeysRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withName(name: string): ListSupabaseApplicationApiKeysRequest {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ListSupabaseApplicationApiKeysRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: ListSupabaseApplicationApiKeysRequestStatusEnum | string): ListSupabaseApplicationApiKeysRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: ListSupabaseApplicationApiKeysRequestTypeEnum | string): ListSupabaseApplicationApiKeysRequest {
        this['type'] = type;
        return this;
    }
    public withStartCreatedTime(startCreatedTime: string): ListSupabaseApplicationApiKeysRequest {
        this['start_created_time'] = startCreatedTime;
        return this;
    }
    public set startCreatedTime(startCreatedTime: string  | undefined) {
        this['start_created_time'] = startCreatedTime;
    }
    public get startCreatedTime(): string | undefined {
        return this['start_created_time'];
    }
    public withEndCreatedTime(endCreatedTime: string): ListSupabaseApplicationApiKeysRequest {
        this['end_created_time'] = endCreatedTime;
        return this;
    }
    public set endCreatedTime(endCreatedTime: string  | undefined) {
        this['end_created_time'] = endCreatedTime;
    }
    public get endCreatedTime(): string | undefined {
        return this['end_created_time'];
    }
    public withSortKey(sortKey: ListSupabaseApplicationApiKeysRequestSortKeyEnum | string): ListSupabaseApplicationApiKeysRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListSupabaseApplicationApiKeysRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListSupabaseApplicationApiKeysRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListSupabaseApplicationApiKeysRequestSortDirEnum | string): ListSupabaseApplicationApiKeysRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListSupabaseApplicationApiKeysRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListSupabaseApplicationApiKeysRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withOffset(offset: number): ListSupabaseApplicationApiKeysRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSupabaseApplicationApiKeysRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSupabaseApplicationApiKeysRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSupabaseApplicationApiKeysRequestStatusEnum {
    NORMAL = 'normal',
    CREATING = 'creating',
    CREATEFAIL = 'createfail',
    DELETED = 'deleted'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSupabaseApplicationApiKeysRequestTypeEnum {
    PUBLISHABLE = 'publishable',
    SECRET = 'secret',
    ANON = 'anon',
    SERVICE_ROLE = 'service_role'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSupabaseApplicationApiKeysRequestSortKeyEnum {
    NAME = 'name',
    STATUS = 'status',
    TYPE = 'type',
    CREATED_USER = 'created_user',
    UPDATED_USER = 'updated_user',
    CREATED_TIME = 'created_time',
    UPDATED_TIME = 'updated_time'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSupabaseApplicationApiKeysRequestSortDirEnum {
    DESC = 'desc',
    ASC = 'asc'
}
