import { CertInfo } from './CertInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainCertificateResponse extends SdkResponse {
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'cert_info'?: CertInfo;
    public constructor() { 
        super();
    }
    public withDomainId(domainId: string): ShowDomainCertificateResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): ShowDomainCertificateResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withCertInfo(certInfo: CertInfo): ShowDomainCertificateResponse {
        this['cert_info'] = certInfo;
        return this;
    }
    public set certInfo(certInfo: CertInfo  | undefined) {
        this['cert_info'] = certInfo;
    }
    public get certInfo(): CertInfo | undefined {
        return this['cert_info'];
    }
}