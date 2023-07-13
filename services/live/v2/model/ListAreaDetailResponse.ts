import { AreaDetail } from './AreaDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAreaDetailResponse extends SdkResponse {
    private 'data_list'?: Array<AreaDetail> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<AreaDetail>): ListAreaDetailResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AreaDetail> | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList() {
        return this['data_list'];
    }
    public withXRequestId(xRequestId: string): ListAreaDetailResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
}