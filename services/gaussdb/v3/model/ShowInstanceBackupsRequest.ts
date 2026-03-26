

export class ShowInstanceBackupsRequest {
    private 'X-Language'?: ShowInstanceBackupsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public offset?: string;
    public limit?: string;
    private 'order_field'?: string;
    private 'order_rule'?: string;
    private 'filter_field'?: string;
    private 'filter_content'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ShowInstanceBackupsRequestXLanguageEnum | string): ShowInstanceBackupsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowInstanceBackupsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowInstanceBackupsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowInstanceBackupsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: string): ShowInstanceBackupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ShowInstanceBackupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderField(orderField: string): ShowInstanceBackupsRequest {
        this['order_field'] = orderField;
        return this;
    }
    public set orderField(orderField: string  | undefined) {
        this['order_field'] = orderField;
    }
    public get orderField(): string | undefined {
        return this['order_field'];
    }
    public withOrderRule(orderRule: string): ShowInstanceBackupsRequest {
        this['order_rule'] = orderRule;
        return this;
    }
    public set orderRule(orderRule: string  | undefined) {
        this['order_rule'] = orderRule;
    }
    public get orderRule(): string | undefined {
        return this['order_rule'];
    }
    public withFilterField(filterField: string): ShowInstanceBackupsRequest {
        this['filter_field'] = filterField;
        return this;
    }
    public set filterField(filterField: string  | undefined) {
        this['filter_field'] = filterField;
    }
    public get filterField(): string | undefined {
        return this['filter_field'];
    }
    public withFilterContent(filterContent: string): ShowInstanceBackupsRequest {
        this['filter_content'] = filterContent;
        return this;
    }
    public set filterContent(filterContent: string  | undefined) {
        this['filter_content'] = filterContent;
    }
    public get filterContent(): string | undefined {
        return this['filter_content'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceBackupsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
