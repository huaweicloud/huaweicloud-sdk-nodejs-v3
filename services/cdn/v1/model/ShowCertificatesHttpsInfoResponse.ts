import { HttpsDetail } from './HttpsDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertificatesHttpsInfoResponse extends SdkResponse {
    public total?: number;
    public https?: Array<HttpsDetail>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowCertificatesHttpsInfoResponse {
        this['total'] = total;
        return this;
    }
    public withHttps(https: Array<HttpsDetail>): ShowCertificatesHttpsInfoResponse {
        this['https'] = https;
        return this;
    }
}