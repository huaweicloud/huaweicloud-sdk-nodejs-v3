

export class ListAiApplicationsRequest {
    private 'X-Language'?: ListAiApplicationsRequestXLanguageEnum | string;
    public name?: string;
    public id?: string;
    public type?: string;
    public mode?: string;
    public status?: string;
    private 'managed_instance_id'?: string;
    private 'managed_instance_name'?: string;
    private 'enable_ssl'?: boolean;
    private 'start_created_time'?: string;
    private 'end_created_time'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: ListAiApplicationsRequestSortDirEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListAiApplicationsRequestXLanguageEnum | string): ListAiApplicationsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListAiApplicationsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListAiApplicationsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withName(name: string): ListAiApplicationsRequest {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ListAiApplicationsRequest {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ListAiApplicationsRequest {
        this['type'] = type;
        return this;
    }
    public withMode(mode: string): ListAiApplicationsRequest {
        this['mode'] = mode;
        return this;
    }
    public withStatus(status: string): ListAiApplicationsRequest {
        this['status'] = status;
        return this;
    }
    public withManagedInstanceId(managedInstanceId: string): ListAiApplicationsRequest {
        this['managed_instance_id'] = managedInstanceId;
        return this;
    }
    public set managedInstanceId(managedInstanceId: string  | undefined) {
        this['managed_instance_id'] = managedInstanceId;
    }
    public get managedInstanceId(): string | undefined {
        return this['managed_instance_id'];
    }
    public withManagedInstanceName(managedInstanceName: string): ListAiApplicationsRequest {
        this['managed_instance_name'] = managedInstanceName;
        return this;
    }
    public set managedInstanceName(managedInstanceName: string  | undefined) {
        this['managed_instance_name'] = managedInstanceName;
    }
    public get managedInstanceName(): string | undefined {
        return this['managed_instance_name'];
    }
    public withEnableSsl(enableSsl: boolean): ListAiApplicationsRequest {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withStartCreatedTime(startCreatedTime: string): ListAiApplicationsRequest {
        this['start_created_time'] = startCreatedTime;
        return this;
    }
    public set startCreatedTime(startCreatedTime: string  | undefined) {
        this['start_created_time'] = startCreatedTime;
    }
    public get startCreatedTime(): string | undefined {
        return this['start_created_time'];
    }
    public withEndCreatedTime(endCreatedTime: string): ListAiApplicationsRequest {
        this['end_created_time'] = endCreatedTime;
        return this;
    }
    public set endCreatedTime(endCreatedTime: string  | undefined) {
        this['end_created_time'] = endCreatedTime;
    }
    public get endCreatedTime(): string | undefined {
        return this['end_created_time'];
    }
    public withSortKey(sortKey: string): ListAiApplicationsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListAiApplicationsRequestSortDirEnum | string): ListAiApplicationsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListAiApplicationsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListAiApplicationsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withOffset(offset: number): ListAiApplicationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAiApplicationsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAiApplicationsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAiApplicationsRequestSortDirEnum {
    DESC = 'desc',
    ASC = 'asc'
}
