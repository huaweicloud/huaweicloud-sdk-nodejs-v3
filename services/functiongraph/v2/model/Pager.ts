

export class Pager {
    public page?: number;
    private 'page_size'?: number | undefined;
    private 'total_rows'?: number | undefined;
    public constructor() { 
    }
    public withPage(page: number): Pager {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): Pager {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize() {
        return this['page_size'];
    }
    public withTotalRows(totalRows: number): Pager {
        this['total_rows'] = totalRows;
        return this;
    }
    public set totalRows(totalRows: number | undefined) {
        this['total_rows'] = totalRows;
    }
    public get totalRows() {
        return this['total_rows'];
    }
}