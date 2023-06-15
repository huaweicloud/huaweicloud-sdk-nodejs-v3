import { TrafficSummaryData } from './TrafficSummaryData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainTrafficSummaryResponse extends SdkResponse {
    private 'traffic_list'?: Array<TrafficSummaryData> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTrafficList(trafficList: Array<TrafficSummaryData>): ListDomainTrafficSummaryResponse {
        this['traffic_list'] = trafficList;
        return this;
    }
    public set trafficList(trafficList: Array<TrafficSummaryData> | undefined) {
        this['traffic_list'] = trafficList;
    }
    public get trafficList() {
        return this['traffic_list'];
    }
    public withXRequestId(xRequestId: string): ListDomainTrafficSummaryResponse {
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