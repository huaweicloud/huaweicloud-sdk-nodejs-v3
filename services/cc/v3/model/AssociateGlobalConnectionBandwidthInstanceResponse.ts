import { AssociateGlobalConnectionBandwidthInstanceResponseInfo } from './AssociateGlobalConnectionBandwidthInstanceResponseInfo';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateGlobalConnectionBandwidthInstanceResponse extends SdkResponse {
    private 'request_id'?: string;
    public gcbandwidths?: Array<AssociateGlobalConnectionBandwidthInstanceResponseInfo>;
    public constructor(requestId?: string, gcbandwidths?: Array<AssociateGlobalConnectionBandwidthInstanceResponseInfo>) { 
        super();
        this['request_id'] = requestId;
        this['gcbandwidths'] = gcbandwidths;
    }
    public withRequestId(requestId: string): AssociateGlobalConnectionBandwidthInstanceResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGcbandwidths(gcbandwidths: Array<AssociateGlobalConnectionBandwidthInstanceResponseInfo>): AssociateGlobalConnectionBandwidthInstanceResponse {
        this['gcbandwidths'] = gcbandwidths;
        return this;
    }
}