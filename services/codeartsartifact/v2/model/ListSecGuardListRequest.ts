

export class ListSecGuardListRequest {
    public date?: number;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor() { 
    }
    public withDate(date: number): ListSecGuardListRequest {
        this['date'] = date;
        return this;
    }
    public withPageNo(pageNo: number): ListSecGuardListRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ListSecGuardListRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}