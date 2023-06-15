import { StreamCountData } from './StreamCountData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStreamCountResponse extends SdkResponse {
    private 'data_list'?: Array<StreamCountData> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<StreamCountData>): ShowStreamCountResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<StreamCountData> | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList() {
        return this['data_list'];
    }
    public withXRequestId(xRequestId: string): ShowStreamCountResponse {
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