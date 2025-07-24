import { TaskResultDetailVo } from './TaskResultDetailVo';


export class ResultValueListTaskResulDetailtVo {
    public total?: number;
    public reason?: string;
    private 'page_size'?: number;
    private 'page_no'?: number;
    public value?: TaskResultDetailVo;
    public constructor() { 
    }
    public withTotal(total: number): ResultValueListTaskResulDetailtVo {
        this['total'] = total;
        return this;
    }
    public withReason(reason: string): ResultValueListTaskResulDetailtVo {
        this['reason'] = reason;
        return this;
    }
    public withPageSize(pageSize: number): ResultValueListTaskResulDetailtVo {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNo(pageNo: number): ResultValueListTaskResulDetailtVo {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withValue(value: TaskResultDetailVo): ResultValueListTaskResulDetailtVo {
        this['value'] = value;
        return this;
    }
}