

export class Sort {
    private 'order_by': Array<string> | undefined;
    public order: SortOrderEnum;
    public constructor(orderBy?: any, order?: any) { 
        this['order_by'] = orderBy;
        this['order'] = order;
    }
    public withOrderBy(orderBy: Array<string>): Sort {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: Array<string> | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy() {
        return this['order_by'];
    }
    public withOrder(order: SortOrderEnum): Sort {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SortOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
