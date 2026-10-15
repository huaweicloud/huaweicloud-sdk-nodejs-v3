

export class ListBigKeysRequest {
    private 'instance_id'?: string;
    private 'stat_type'?: ListBigKeysRequestStatTypeEnum | string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'key_types'?: Array<ListBigKeysRequestKeyTypesEnum> | Array<string>;
    private 'key_name'?: string;
    private 'db_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_field'?: ListBigKeysRequestSortFieldEnum | string;
    public asc?: boolean;
    private 'X-Language'?: ListBigKeysRequestXLanguageEnum | string;
    public constructor(instanceId?: string, statType?: string, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['stat_type'] = statType;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): ListBigKeysRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatType(statType: ListBigKeysRequestStatTypeEnum | string): ListBigKeysRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: ListBigKeysRequestStatTypeEnum | string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): ListBigKeysRequestStatTypeEnum | string | undefined {
        return this['stat_type'];
    }
    public withStartAt(startAt: number): ListBigKeysRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListBigKeysRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withKeyTypes(keyTypes: Array<ListBigKeysRequestKeyTypesEnum> | Array<string>): ListBigKeysRequest {
        this['key_types'] = keyTypes;
        return this;
    }
    public set keyTypes(keyTypes: Array<ListBigKeysRequestKeyTypesEnum> | Array<string>  | undefined) {
        this['key_types'] = keyTypes;
    }
    public get keyTypes(): Array<ListBigKeysRequestKeyTypesEnum> | Array<string> | undefined {
        return this['key_types'];
    }
    public withKeyName(keyName: string): ListBigKeysRequest {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withDbId(dbId: string): ListBigKeysRequest {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withOffset(offset: number): ListBigKeysRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBigKeysRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortField(sortField: ListBigKeysRequestSortFieldEnum | string): ListBigKeysRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ListBigKeysRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ListBigKeysRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withAsc(asc: boolean): ListBigKeysRequest {
        this['asc'] = asc;
        return this;
    }
    public withXLanguage(xLanguage: ListBigKeysRequestXLanguageEnum | string): ListBigKeysRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListBigKeysRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListBigKeysRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBigKeysRequestStatTypeEnum {
    SIZE = 'size',
    STORAGE = 'storage'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBigKeysRequestKeyTypesEnum {
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
export enum ListBigKeysRequestSortFieldEnum {
    SIZE = 'size'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBigKeysRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
