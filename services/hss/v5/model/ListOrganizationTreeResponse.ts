import { OrganizationNodeResponseInfo } from './OrganizationNodeResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOrganizationTreeResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<OrganizationNodeResponseInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListOrganizationTreeResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<OrganizationNodeResponseInfo>): ListOrganizationTreeResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<OrganizationNodeResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<OrganizationNodeResponseInfo> | undefined {
        return this['data_list'];
    }
    public withXRequestId(xRequestId: string): ListOrganizationTreeResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}