import { SpCertificateDto } from './SpCertificateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSpCertificatesResponse extends SdkResponse {
    public body?: Array<SpCertificateDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SpCertificateDto>): ListSpCertificatesResponse {
        this['body'] = body;
        return this;
    }
}