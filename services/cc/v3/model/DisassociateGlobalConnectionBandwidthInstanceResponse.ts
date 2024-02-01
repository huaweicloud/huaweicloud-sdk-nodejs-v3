import { DisassociateGlobalConnectionBandwidthInstanceResponseInfo } from './DisassociateGlobalConnectionBandwidthInstanceResponseInfo';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisassociateGlobalConnectionBandwidthInstanceResponse extends SdkResponse {
    private 'request_id'?: string;
    public gcbandwidths?: Array<DisassociateGlobalConnectionBandwidthInstanceResponseInfo>;
    public constructor(requestId?: string, gcbandwidths?: Array<DisassociateGlobalConnectionBandwidthInstanceResponseInfo>) { 
        super();
        this['request_id'] = requestId;
        this['gcbandwidths'] = gcbandwidths;
    }
    public withRequestId(requestId: string): DisassociateGlobalConnectionBandwidthInstanceResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGcbandwidths(gcbandwidths: Array<DisassociateGlobalConnectionBandwidthInstanceResponseInfo>): DisassociateGlobalConnectionBandwidthInstanceResponse {
        this['gcbandwidths'] = gcbandwidths;
        return this;
    }
}