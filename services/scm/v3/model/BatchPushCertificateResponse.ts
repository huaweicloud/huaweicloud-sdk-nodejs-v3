import { BatchPushCertificateResponseBodyResults } from './BatchPushCertificateResponseBodyResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchPushCertificateResponse extends SdkResponse {
    public results?: Array<BatchPushCertificateResponseBodyResults>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<BatchPushCertificateResponseBodyResults>): BatchPushCertificateResponse {
        this['results'] = results;
        return this;
    }
}