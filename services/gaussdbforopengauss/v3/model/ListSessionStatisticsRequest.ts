

export class ListSessionStatisticsRequest {
    private 'X-Language'?: ListSessionStatisticsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public dimension?: ListSessionStatisticsRequestDimensionEnum | string;
    public offset?: number;
    public limit?: number;
    private 'order_field'?: ListSessionStatisticsRequestOrderFieldEnum | string;
    public order?: ListSessionStatisticsRequestOrderEnum | string;
    public constructor(instanceId?: string, dimension?: string) { 
        this['instance_id'] = instanceId;
        this['dimension'] = dimension;
    }
    public withXLanguage(xLanguage: ListSessionStatisticsRequestXLanguageEnum | string): ListSessionStatisticsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSessionStatisticsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSessionStatisticsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSessionStatisticsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDimension(dimension: ListSessionStatisticsRequestDimensionEnum | string): ListSessionStatisticsRequest {
        this['dimension'] = dimension;
        return this;
    }
    public withOffset(offset: number): ListSessionStatisticsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSessionStatisticsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderField(orderField: ListSessionStatisticsRequestOrderFieldEnum | string): ListSessionStatisticsRequest {
        this['order_field'] = orderField;
        return this;
    }
    public set orderField(orderField: ListSessionStatisticsRequestOrderFieldEnum | string  | undefined) {
        this['order_field'] = orderField;
    }
    public get orderField(): ListSessionStatisticsRequestOrderFieldEnum | string | undefined {
        return this['order_field'];
    }
    public withOrder(order: ListSessionStatisticsRequestOrderEnum | string): ListSessionStatisticsRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSessionStatisticsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSessionStatisticsRequestDimensionEnum {
    USENAME = 'usename',
    CLIENT_ADDR = 'client_addr',
    DATNAME = 'datname'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSessionStatisticsRequestOrderFieldEnum {
    ACTIVE_NUM = 'active_num',
    TOTAL_NUM = 'total_num'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSessionStatisticsRequestOrderEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
