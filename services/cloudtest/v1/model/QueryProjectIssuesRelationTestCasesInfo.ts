

export class QueryProjectIssuesRelationTestCasesInfo {
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor(pageNo?: number, pageSize?: number) { 
        this['page_no'] = pageNo;
        this['page_size'] = pageSize;
    }
    public withPageNo(pageNo: number): QueryProjectIssuesRelationTestCasesInfo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): QueryProjectIssuesRelationTestCasesInfo {
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