

export class EventQueryParam2Sort {
    private 'order_by'?: Array<string>;
    public order?: EventQueryParam2SortOrderEnum | string;
    public constructor() { 
    }
    public withOrderBy(orderBy: Array<string>): EventQueryParam2Sort {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: Array<string>  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): Array<string> | undefined {
        return this['order_by'];
    }
    public withOrder(order: EventQueryParam2SortOrderEnum | string): EventQueryParam2Sort {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventQueryParam2SortOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
