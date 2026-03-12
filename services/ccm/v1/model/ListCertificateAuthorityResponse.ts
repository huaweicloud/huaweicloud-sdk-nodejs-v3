import { CertificateAuthorities } from './CertificateAuthorities';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertificateAuthorityResponse extends SdkResponse {
    public total?: number;
    private 'certificate_authorities'?: Array<CertificateAuthorities>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCertificateAuthorityResponse {
        this['total'] = total;
        return this;
    }
    public withCertificateAuthorities(certificateAuthorities: Array<CertificateAuthorities>): ListCertificateAuthorityResponse {
        this['certificate_authorities'] = certificateAuthorities;
        return this;
    }
    public set certificateAuthorities(certificateAuthorities: Array<CertificateAuthorities>  | undefined) {
        this['certificate_authorities'] = certificateAuthorities;
    }
    public get certificateAuthorities(): Array<CertificateAuthorities> | undefined {
        return this['certificate_authorities'];
    }
}