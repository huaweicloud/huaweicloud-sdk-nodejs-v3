import { TaskCaseResponseTimeDetailVo } from './TaskCaseResponseTimeDetailVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScattersUsingResponse extends SdkResponse {
    public list?: Array<TaskCaseResponseTimeDetailVo>;
    private 'page_num'?: number;
    private 'page_size'?: number;
    private 'total_page'?: number;
    private 'total_size'?: number;
    public constructor() { 
        super();
    }
    public withList(list: Array<TaskCaseResponseTimeDetailVo>): ListScattersUsingResponse {
        this['list'] = list;
        return this;
    }
    public withPageNum(pageNum: number): ListScattersUsingResponse {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): ListScattersUsingResponse {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withTotalPage(totalPage: number): ListScattersUsingResponse {
        this['total_page'] = totalPage;
        return this;
    }
    public set totalPage(totalPage: number  | undefined) {
        this['total_page'] = totalPage;
    }
    public get totalPage(): number | undefined {
        return this['total_page'];
    }
    public withTotalSize(totalSize: number): ListScattersUsingResponse {
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