import { CustomerInstanceVO } from './CustomerInstanceVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDdmsResponse extends SdkResponse {
    private 'instance_num'?: number;
    public instances?: Array<CustomerInstanceVO>;
    private 'page_size'?: number;
    public total?: number;
    private 'total_page'?: number;
    private 'page_no'?: number;
    public constructor() { 
        super();
    }
    public withInstanceNum(instanceNum: number): ListDdmsResponse {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
    public withInstances(instances: Array<CustomerInstanceVO>): ListDdmsResponse {
        this['instances'] = instances;
        return this;
    }
    public withPageSize(pageSize: number): ListDdmsResponse {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withTotal(total: number): ListDdmsResponse {
        this['total'] = total;
        return this;
    }
    public withTotalPage(totalPage: number): ListDdmsResponse {
        this['total_page'] = totalPage;
        return this;
    }
    public set totalPage(totalPage: number  | undefined) {
        this['total_page'] = totalPage;
    }
    public get totalPage(): number | undefined {
        return this['total_page'];
    }
    public withPageNo(pageNo: number): ListDdmsResponse {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
}