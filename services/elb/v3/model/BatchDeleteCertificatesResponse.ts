import { BatchDeleteCertificatesResp } from './BatchDeleteCertificatesResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteCertificatesResponse extends SdkResponse {
    public certificates?: Array<BatchDeleteCertificatesResp>;
    public constructor() { 
        super();
    }
    public withCertificates(certificates: Array<BatchDeleteCertificatesResp>): BatchDeleteCertificatesResponse {
        this['certificates'] = certificates;
        return this;
    }
}