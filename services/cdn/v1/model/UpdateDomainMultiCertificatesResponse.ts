import { UpdateDomainMultiCertificatesResponseBodyContent } from './UpdateDomainMultiCertificatesResponseBodyContent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainMultiCertificatesResponse extends SdkResponse {
    public https?: UpdateDomainMultiCertificatesResponseBodyContent;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withHttps(https: UpdateDomainMultiCertificatesResponseBodyContent): UpdateDomainMultiCertificatesResponse {
        this['https'] = https;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateDomainMultiCertificatesResponse {
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