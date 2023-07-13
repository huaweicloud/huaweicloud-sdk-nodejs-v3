import { V2BandwidthData } from './V2BandwidthData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUpBandwidthResponse extends SdkResponse {
    private 'data_list'?: Array<V2BandwidthData> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<V2BandwidthData>): ShowUpBandwidthResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<V2BandwidthData> | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList() {
        return this['data_list'];
    }
    public withXRequestId(xRequestId: string): ShowUpBandwidthResponse {
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