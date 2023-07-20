import { BatchPublicipResp } from './BatchPublicipResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AttachBatchPublicIpResponse extends SdkResponse {
    public publicips?: Array<BatchPublicipResp>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withPublicips(publicips: Array<BatchPublicipResp>): AttachBatchPublicIpResponse {
        this['publicips'] = publicips;
        return this;
    }
    public withRequestId(requestId: string): AttachBatchPublicIpResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}