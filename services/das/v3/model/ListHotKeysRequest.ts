

export class ListHotKeysRequest {
    private 'instance_id'?: string;
    private 'stat_type'?: ListHotKeysRequestStatTypeEnum | string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'key_types'?: Array<ListHotKeysRequestKeyTypesEnum> | Array<string>;
    private 'key_name'?: string;
    private 'db_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_field'?: ListHotKeysRequestSortFieldEnum | string;
    public asc?: boolean;
    private 'X-Language'?: ListHotKeysRequestXLanguageEnum | string;
    public constructor(instanceId?: string, statType?: string, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['stat_type'] = statType;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): ListHotKeysRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatType(statType: ListHotKeysRequestStatTypeEnum | string): ListHotKeysRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: ListHotKeysRequestStatTypeEnum | string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): ListHotKeysRequestStatTypeEnum | string | undefined {
        return this['stat_type'];
    }
    public withStartAt(startAt: number): ListHotKeysRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListHotKeysRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withKeyTypes(keyTypes: Array<ListHotKeysRequestKeyTypesEnum> | Array<string>): ListHotKeysRequest {
        this['key_types'] = keyTypes;
        return this;
    }
    public set keyTypes(keyTypes: Array<ListHotKeysRequestKeyTypesEnum> | Array<string>  | undefined) {
        this['key_types'] = keyTypes;
    }
    public get keyTypes(): Array<ListHotKeysRequestKeyTypesEnum> | Array<string> | undefined {
        return this['key_types'];
    }
    public withKeyName(keyName: string): ListHotKeysRequest {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withDbId(dbId: string): ListHotKeysRequest {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withOffset(offset: number): ListHotKeysRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHotKeysRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortField(sortField: ListHotKeysRequestSortFieldEnum | string): ListHotKeysRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ListHotKeysRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ListHotKeysRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withAsc(asc: boolean): ListHotKeysRequest {
        this['asc'] = asc;
        return this;
    }
    public withXLanguage(xLanguage: ListHotKeysRequestXLanguageEnum | string): ListHotKeysRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListHotKeysRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListHotKeysRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHotKeysRequestStatTypeEnum {
    QPS = 'qps',
    TRAFFIC = 'traffic'
}
/**
    * @export
    * @enum {string}
    */
export enum ListHotKeysRequestKeyTypesEnum {
    STRING = 'string',
    HASH = 'hash',
    LIST = 'list',
    ZSET = 'zset',
    SET = 'set',
    STREAM = 'stream',
    EXHASH = 'exhash'
}
/**
    * @export
    * @enum {string}
    */
export enum ListHotKeysRequestSortFieldEnum {
    QPS = 'qps',
    TRAFFIC_IN = 'traffic_in',
    TRAFFIC_OUT = 'traffic_out'
}
/**
    * @export
    * @enum {string}
    */
export enum ListHotKeysRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
