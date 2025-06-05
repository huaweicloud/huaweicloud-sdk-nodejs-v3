

export class ListRelatedProjectInfoRequest {
    private 'page_size'?: number;
    private 'page_no'?: number;
    public search?: string;
    public constructor() { 
    }
    public withPageSize(pageSize: number): ListRelatedProjectInfoRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNo(pageNo: number): ListRelatedProjectInfoRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withSearch(search: string): ListRelatedProjectInfoRequest {
        this['search'] = search;
        return this;
    }
}