import { TestItemVo } from './TestItemVo';


export class ResultValueTestItemVo {
    public total?: number;
    public value?: TestItemVo;
    public reason?: string;
    private 'page_size'?: number;
    private 'page_no'?: number;
    private 'has_more'?: boolean;
    public constructor() { 
    }
    public withTotal(total: number): ResultValueTestItemVo {
        this['total'] = total;
        return this;
    }
    public withValue(value: TestItemVo): ResultValueTestItemVo {
        this['value'] = value;
        return this;
    }
    public withReason(reason: string): ResultValueTestItemVo {
        this['reason'] = reason;
        return this;
    }
    public withPageSize(pageSize: number): ResultValueTestItemVo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNo(pageNo: number): ResultValueTestItemVo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withHasMore(hasMore: boolean): ResultValueTestItemVo {
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