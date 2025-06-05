

export class ListRecordsResultPagination {
    public page?: number;
    public limit?: number;
    public total?: number;
    public constructor() { 
    }
    public withPage(page: number): ListRecordsResultPagination {
        this['page'] = page;
        return this;
    }
    public withLimit(limit: number): ListRecordsResultPagination {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListRecordsResultPagination {
        this['total'] = total;
        return this;
    }
}