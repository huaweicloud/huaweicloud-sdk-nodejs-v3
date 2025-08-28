import { ShowInstanceBeanResponse } from './ShowInstanceBeanResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesResponse extends SdkResponse {
    public instances?: Array<ShowInstanceBeanResponse>;
    private 'instance_num'?: number;
    private 'page_no'?: number;
    private 'page_size'?: number;
    private 'total_record'?: number;
    private 'total_page'?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ShowInstanceBeanResponse>): ListInstancesResponse {
        this['instances'] = instances;
        return this;
    }
    public withInstanceNum(instanceNum: number): ListInstancesResponse {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
    public withPageNo(pageNo: number): ListInstancesResponse {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ListInstancesResponse {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withTotalRecord(totalRecord: number): ListInstancesResponse {
        this['total_record'] = totalRecord;
        return this;
    }
    public set totalRecord(totalRecord: number  | undefined) {
        this['total_record'] = totalRecord;
    }
    public get totalRecord(): number | undefined {
        return this['total_record'];
    }
    public withTotalPage(totalPage: number): ListInstancesResponse {
        this['total_page'] = totalPage;
        return this;
    }
    public set totalPage(totalPage: number  | undefined) {
        this['total_page'] = totalPage;
    }
    public get totalPage(): number | undefined {
        return this['total_page'];
    }
}