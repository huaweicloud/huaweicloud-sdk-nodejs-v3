

export class BasePaginationResponseEntity {
    public totalRecords?: number;
    public totalPages?: number;
    public constructor() { 
    }
    public withTotalRecords(totalRecords: number): BasePaginationResponseEntity {
        this['totalRecords'] = totalRecords;
        return this;
    }
    public withTotalPages(totalPages: number): BasePaginationResponseEntity {
        this['totalPages'] = totalPages;
        return this;
    }
}