import { VariableRes } from './VariableRes';


export class PageResults {
    private 'page_list'?: Array<VariableRes>;
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'total_page'?: number;
    private 'total_size'?: number;
    public constructor() { 
    }
    public withPageList(pageList: Array<VariableRes>): PageResults {
        this['page_list'] = pageList;
        return this;
    }
    public set pageList(pageList: Array<VariableRes>  | undefined) {
        this['page_list'] = pageList;
    }
    public get pageList(): Array<VariableRes> | undefined {
        return this['page_list'];
    }
    public withPageNo(pageNo: number): PageResults {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): PageResults {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withTotalPage(totalPage: number): PageResults {
        this['total_page'] = totalPage;
        return this;
    }
    public set totalPage(totalPage: number  | undefined) {
        this['total_page'] = totalPage;
    }
    public get totalPage(): number | undefined {
        return this['total_page'];
    }
    public withTotalSize(totalSize: number): PageResults {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number  | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize(): number | undefined {
        return this['total_size'];
    }
}