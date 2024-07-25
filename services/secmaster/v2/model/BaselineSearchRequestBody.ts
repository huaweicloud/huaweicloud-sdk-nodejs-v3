

export class BaselineSearchRequestBody {
    public limit?: number;
    public offset?: number;
    private 'sort_by'?: string;
    public order?: string;
    private 'from_date'?: string;
    private 'to_date'?: string;
    public condition?: object;
    public constructor() { 
    }
    public withLimit(limit: number): BaselineSearchRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): BaselineSearchRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): BaselineSearchRequestBody {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: string): BaselineSearchRequestBody {
        this['order'] = order;
        return this;
    }
    public withFromDate(fromDate: string): BaselineSearchRequestBody {
        this['from_date'] = fromDate;
        return this;
    }
    public set fromDate(fromDate: string  | undefined) {
        this['from_date'] = fromDate;
    }
    public get fromDate(): string | undefined {
        return this['from_date'];
    }
    public withToDate(toDate: string): BaselineSearchRequestBody {
        this['to_date'] = toDate;
        return this;
    }
    public set toDate(toDate: string  | undefined) {
        this['to_date'] = toDate;
    }
    public get toDate(): string | undefined {
        return this['to_date'];
    }
    public withCondition(condition: object): BaselineSearchRequestBody {
        this['condition'] = condition;
        return this;
    }
}