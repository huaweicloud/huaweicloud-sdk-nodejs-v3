import { DataobjectSearchCondition } from './DataobjectSearchCondition';


export class DataobjectSearch {
    public limit?: number;
    public offset?: number;
    private 'sort_by'?: string;
    public order?: DataobjectSearchOrderEnum | string;
    private 'from_date'?: string;
    private 'to_date'?: string;
    public condition?: DataobjectSearchCondition;
    public constructor() { 
    }
    public withLimit(limit: number): DataobjectSearch {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): DataobjectSearch {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): DataobjectSearch {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: DataobjectSearchOrderEnum | string): DataobjectSearch {
        this['order'] = order;
        return this;
    }
    public withFromDate(fromDate: string): DataobjectSearch {
        this['from_date'] = fromDate;
        return this;
    }
    public set fromDate(fromDate: string  | undefined) {
        this['from_date'] = fromDate;
    }
    public get fromDate(): string | undefined {
        return this['from_date'];
    }
    public withToDate(toDate: string): DataobjectSearch {
        this['to_date'] = toDate;
        return this;
    }
    public set toDate(toDate: string  | undefined) {
        this['to_date'] = toDate;
    }
    public get toDate(): string | undefined {
        return this['to_date'];
    }
    public withCondition(condition: DataobjectSearchCondition): DataobjectSearch {
        this['condition'] = condition;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataobjectSearchOrderEnum {
    DESC = 'DESC',
    ASC = 'ASC'
}
