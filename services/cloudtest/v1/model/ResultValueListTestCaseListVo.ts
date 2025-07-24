import { TestCaseListVo } from './TestCaseListVo';


export class ResultValueListTestCaseListVo {
    public total?: number;
    public value?: Array<TestCaseListVo>;
    public reason?: string;
    private 'page_size'?: number;
    private 'page_no'?: number;
    private 'has_more'?: boolean;
    public constructor() { 
    }
    public withTotal(total: number): ResultValueListTestCaseListVo {
        this['total'] = total;
        return this;
    }
    public withValue(value: Array<TestCaseListVo>): ResultValueListTestCaseListVo {
        this['value'] = value;
        return this;
    }
    public withReason(reason: string): ResultValueListTestCaseListVo {
        this['reason'] = reason;
        return this;
    }
    public withPageSize(pageSize: number): ResultValueListTestCaseListVo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNo(pageNo: number): ResultValueListTestCaseListVo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withHasMore(hasMore: boolean): ResultValueListTestCaseListVo {
        this['has_more'] = hasMore;
        return this;
    }
    public set hasMore(hasMore: boolean  | undefined) {
        this['has_more'] = hasMore;
    }
    public get hasMore(): boolean | undefined {
        return this['has_more'];
    }
}