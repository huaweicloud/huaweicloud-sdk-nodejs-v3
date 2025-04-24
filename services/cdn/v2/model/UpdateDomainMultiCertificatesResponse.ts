import { UpdateDomainMultiCertificatesResponseBodyContent } from './UpdateDomainMultiCertificatesResponseBodyContent';
import { UpdateDomainMultiCertificatesResponseBodyResult } from './UpdateDomainMultiCertificatesResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainMultiCertificatesResponse extends SdkResponse {
    public https?: UpdateDomainMultiCertificatesResponseBodyContent;
    public status?: string;
    public result?: Array<UpdateDomainMultiCertificatesResponseBodyResult>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withHttps(https: UpdateDomainMultiCertificatesResponseBodyContent): UpdateDomainMultiCertificatesResponse {
        this['https'] = https;
        return this;
    }
    public withStatus(status: string): UpdateDomainMultiCertificatesResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: Array<UpdateDomainMultiCertificatesResponseBodyResult>): UpdateDomainMultiCertificatesResponse {
        this['result'] = result;
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