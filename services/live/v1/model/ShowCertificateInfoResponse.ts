import { CertInfoResp } from './CertInfoResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertificateInfoResponse extends SdkResponse {
    public total?: number;
    private 'certificates_info'?: Array<CertInfoResp>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowCertificateInfoResponse {
        this['total'] = total;
        return this;
    }
    public withCertificatesInfo(certificatesInfo: Array<CertInfoResp>): ShowCertificateInfoResponse {
        this['certificates_info'] = certificatesInfo;
        return this;
    }
    public set certificatesInfo(certificatesInfo: Array<CertInfoResp>  | undefined) {
        this['certificates_info'] = certificatesInfo;
    }
    public get certificatesInfo(): Array<CertInfoResp> | undefined {
        return this['certificates_info'];
    }
}