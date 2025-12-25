import { DataobjectSearchCondition } from './DataobjectSearchCondition';


export class ResourceDataobjectSearch {
    public limit?: number;
    public offset?: number;
    private 'sort_by'?: string;
    public order?: ResourceDataobjectSearchOrderEnum | string;
    private 'from_date'?: string;
    private 'to_date'?: string;
    public condition?: DataobjectSearchCondition;
    public constructor() { 
    }
    public withLimit(limit: number): ResourceDataobjectSearch {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ResourceDataobjectSearch {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): ResourceDataobjectSearch {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: ResourceDataobjectSearchOrderEnum | string): ResourceDataobjectSearch {
        this['order'] = order;
        return this;
    }
    public withFromDate(fromDate: string): ResourceDataobjectSearch {
        this['from_date'] = fromDate;
        return this;
    }
    public set fromDate(fromDate: string  | undefined) {
        this['from_date'] = fromDate;
    }
    public get fromDate(): string | undefined {
        return this['from_date'];
    }
    public withToDate(toDate: string): ResourceDataobjectSearch {
        this['to_date'] = toDate;
        return this;
    }
    public set toDate(toDate: string  | undefined) {
        this['to_date'] = toDate;
    }
    public get toDate(): string | undefined {
        return this['to_date'];
    }
    public withCondition(condition: DataobjectSearchCondition): ResourceDataobjectSearch {
        this['condition'] = condition;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceDataobjectSearchOrderEnum {
    DESC = 'DESC',
    ASC = 'ASC'
}
