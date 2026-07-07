

export class ListEventsRequest {
    private 'X-Language'?: ListEventsRequestXLanguageEnum | string;
    public id?: string;
    private 'instance_id'?: string;
    public status?: string;
    public type?: string;
    public level?: string;
    private 'sort_field'?: string;
    public order?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListEventsRequestXLanguageEnum | string): ListEventsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListEventsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListEventsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withId(id: string): ListEventsRequest {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): ListEventsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): ListEventsRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ListEventsRequest {
        this['type'] = type;
        return this;
    }
    public withLevel(level: string): ListEventsRequest {
        this['level'] = level;
        return this;
    }
    public withSortField(sortField: string): ListEventsRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withOrder(order: string): ListEventsRequest {
        this['order'] = order;
        return this;
    }
    public withOffset(offset: number): ListEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEventsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEventsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
