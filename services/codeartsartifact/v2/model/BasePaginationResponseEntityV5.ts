

export class BasePaginationResponseEntityV5 {
    private 'total_records'?: number;
    private 'total_pages'?: number;
    public constructor() { 
    }
    public withTotalRecords(totalRecords: number): BasePaginationResponseEntityV5 {
        this['total_records'] = totalRecords;
        return this;
    }
    public set totalRecords(totalRecords: number  | undefined) {
        this['total_records'] = totalRecords;
    }
    public get totalRecords(): number | undefined {
        return this['total_records'];
    }
    public withTotalPages(totalPages: number): BasePaginationResponseEntityV5 {
        this['total_pages'] = totalPages;
        return this;
    }
    public set totalPages(totalPages: number  | undefined) {
        this['total_pages'] = totalPages;
    }
    public get totalPages(): number | undefined {
        return this['total_pages'];
    }
}