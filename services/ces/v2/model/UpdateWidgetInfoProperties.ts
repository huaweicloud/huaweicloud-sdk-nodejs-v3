

export class UpdateWidgetInfoProperties {
    public filter?: UpdateWidgetInfoPropertiesFilterEnum | string;
    public topN?: number;
    public order?: UpdateWidgetInfoPropertiesOrderEnum | string;
    public constructor() { 
    }
    public withFilter(filter: UpdateWidgetInfoPropertiesFilterEnum | string): UpdateWidgetInfoProperties {
        this['filter'] = filter;
        return this;
    }
    public withTopN(topN: number): UpdateWidgetInfoProperties {
        this['topN'] = topN;
        return this;
    }
    public withOrder(order: UpdateWidgetInfoPropertiesOrderEnum | string): UpdateWidgetInfoProperties {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateWidgetInfoPropertiesFilterEnum {
    TOPN = 'topN'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateWidgetInfoPropertiesOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
