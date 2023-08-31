

export class BaseWidgetInfoProperties {
    public filter?: BaseWidgetInfoPropertiesFilterEnum | string;
    public topN?: number;
    public order?: BaseWidgetInfoPropertiesOrderEnum | string;
    public constructor() { 
    }
    public withFilter(filter: BaseWidgetInfoPropertiesFilterEnum | string): BaseWidgetInfoProperties {
        this['filter'] = filter;
        return this;
    }
    public withTopN(topN: number): BaseWidgetInfoProperties {
        this['topN'] = topN;
        return this;
    }
    public withOrder(order: BaseWidgetInfoPropertiesOrderEnum | string): BaseWidgetInfoProperties {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BaseWidgetInfoPropertiesFilterEnum {
    TOPN = 'topN'
}
/**
    * @export
    * @enum {string}
    */
export enum BaseWidgetInfoPropertiesOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
