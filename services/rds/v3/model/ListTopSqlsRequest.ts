

export class ListTopSqlsRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ListTopSqlsRequestXLanguageEnum | string;
    private 'sort_key'?: string;
    public limit?: number;
    public statement?: string;
    private 'sort_dir'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListTopSqlsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ListTopSqlsRequestXLanguageEnum | string): ListTopSqlsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListTopSqlsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListTopSqlsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withSortKey(sortKey: string): ListTopSqlsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withLimit(limit: number): ListTopSqlsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatement(statement: string): ListTopSqlsRequest {
        this['statement'] = statement;
        return this;
    }
    public withSortDir(sortDir: string): ListTopSqlsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTopSqlsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
