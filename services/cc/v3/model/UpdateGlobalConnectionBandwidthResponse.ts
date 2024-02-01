import { GlobalConnectionBandwidth } from './GlobalConnectionBandwidth';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGlobalConnectionBandwidthResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'globalconnection_bandwidth'?: GlobalConnectionBandwidth;
    public constructor(requestId?: string, globalconnectionBandwidth?: GlobalConnectionBandwidth) { 
        super();
        this['request_id'] = requestId;
        this['globalconnection_bandwidth'] = globalconnectionBandwidth;
    }
    public withRequestId(requestId: string): UpdateGlobalConnectionBandwidthResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalconnectionBandwidth(globalconnectionBandwidth: GlobalConnectionBandwidth): UpdateGlobalConnectionBandwidthResponse {
        this['globalconnection_bandwidth'] = globalconnectionBandwidth;
        return this;
    }
    public set globalconnectionBandwidth(globalconnectionBandwidth: GlobalConnectionBandwidth  | undefined) {
        this['globalconnection_bandwidth'] = globalconnectionBandwidth;
    }
    public get globalconnectionBandwidth(): GlobalConnectionBandwidth | undefined {
        return this['globalconnection_bandwidth'];
    }
}