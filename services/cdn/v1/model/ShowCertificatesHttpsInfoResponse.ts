import { HttpsDetail } from './HttpsDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertificatesHttpsInfoResponse extends SdkResponse {
    public total?: number;
    public https?: Array<HttpsDetail>;
    private 'X-Request-Id'?: string;
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
    public withXRequestId(xRequestId: string): ShowCertificatesHttpsInfoResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}