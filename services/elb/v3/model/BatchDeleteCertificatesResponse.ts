import { BatchDeleteCertificatesResp } from './BatchDeleteCertificatesResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteCertificatesResponse extends SdkResponse {
    private 'request_id'?: string;
    public certificates?: Array<BatchDeleteCertificatesResp>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): BatchDeleteCertificatesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCertificates(certificates: Array<BatchDeleteCertificatesResp>): BatchDeleteCertificatesResponse {
        this['certificates'] = certificates;
        return this;
    }
}