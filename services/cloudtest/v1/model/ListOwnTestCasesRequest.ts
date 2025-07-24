

export class ListOwnTestCasesRequest {
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'sort_field'?: string;
    private 'sort_type'?: string;
    public keyword?: string;
    public constructor(pageNo?: number, pageSize?: number) { 
        this['page_no'] = pageNo;
        this['page_size'] = pageSize;
    }
    public withPageNo(pageNo: number): ListOwnTestCasesRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ListOwnTestCasesRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withSortField(sortField: string): ListOwnTestCasesRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: string): ListOwnTestCasesRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
    public withKeyword(keyword: string): ListOwnTestCasesRequest {
        this['keyword'] = keyword;
        return this;
    }
}