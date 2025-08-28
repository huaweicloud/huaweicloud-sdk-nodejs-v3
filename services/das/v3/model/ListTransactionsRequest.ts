

export class ListTransactionsRequest {
    private 'instance_id'?: string;
    private 'datastore_type'?: ListTransactionsRequestDatastoreTypeEnum | string;
    private 'X-Language'?: ListTransactionsRequestXLanguageEnum | string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'page_num'?: number;
    private 'page_size'?: number;
    public order?: ListTransactionsRequestOrderEnum | string;
    private 'order_by'?: ListTransactionsRequestOrderByEnum | string;
    private 'last_sec_min'?: number;
    private 'last_sec_max'?: number;
    public constructor(instanceId?: string, datastoreType?: string, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['datastore_type'] = datastoreType;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): ListTransactionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatastoreType(datastoreType: ListTransactionsRequestDatastoreTypeEnum | string): ListTransactionsRequest {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: ListTransactionsRequestDatastoreTypeEnum | string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): ListTransactionsRequestDatastoreTypeEnum | string | undefined {
        return this['datastore_type'];
    }
    public withXLanguage(xLanguage: ListTransactionsRequestXLanguageEnum | string): ListTransactionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListTransactionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListTransactionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withStartAt(startAt: number): ListTransactionsRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListTransactionsRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withPageNum(pageNum: number): ListTransactionsRequest {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): ListTransactionsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withOrder(order: ListTransactionsRequestOrderEnum | string): ListTransactionsRequest {
        this['order'] = order;
        return this;
    }
    public withOrderBy(orderBy: ListTransactionsRequestOrderByEnum | string): ListTransactionsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListTransactionsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListTransactionsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withLastSecMin(lastSecMin: number): ListTransactionsRequest {
        this['last_sec_min'] = lastSecMin;
        return this;
    }
    public set lastSecMin(lastSecMin: number  | undefined) {
        this['last_sec_min'] = lastSecMin;
    }
    public get lastSecMin(): number | undefined {
        return this['last_sec_min'];
    }
    public withLastSecMax(lastSecMax: number): ListTransactionsRequest {
        this['last_sec_max'] = lastSecMax;
        return this;
    }
    public set lastSecMax(lastSecMax: number  | undefined) {
        this['last_sec_max'] = lastSecMax;
    }
    public get lastSecMax(): number | undefined {
        return this['last_sec_max'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTransactionsRequestDatastoreTypeEnum {
    MYSQL = 'MySQL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTransactionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTransactionsRequestOrderEnum {
    OCCURRENCETIME = 'occurrenceTime',
    LASTSEC = 'lastSec',
    WAITLOCKSTRUCTCOUNT = 'waitLockStructCount',
    HOLDLOCKSTRUCTCOUNT = 'holdLockStructCount',
    COLLECTTIME = 'collectTime'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTransactionsRequestOrderByEnum {
    ASC = 'asc',
    DESC = 'desc'
}
