import { CertificateInfo } from './CertificateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCertificateResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public certificate?: CertificateInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateCertificateResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withCertificate(certificate: CertificateInfo): CreateCertificateResponse {
        this['certificate'] = certificate;
        return this;
    }
}