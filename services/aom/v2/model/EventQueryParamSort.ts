

export class EventQueryParamSort {
    private 'order_by'?: Array<string>;
    public order?: EventQueryParamSortOrderEnum | string;
    public constructor() { 
    }
    public withOrderBy(orderBy: Array<string>): EventQueryParamSort {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: Array<string>  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): Array<string> | undefined {
        return this['order_by'];
    }
    public withOrder(order: EventQueryParamSortOrderEnum | string): EventQueryParamSort {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventQueryParamSortOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
