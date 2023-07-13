import { TimeDoubleValueData } from './TimeDoubleValueData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcRealtimeNetworkResponse extends SdkResponse {
    public network?: Array<TimeDoubleValueData>;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withNetwork(network: Array<TimeDoubleValueData>): ListRtcRealtimeNetworkResponse {
        this['network'] = network;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRtcRealtimeNetworkResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-id'];
    }
}