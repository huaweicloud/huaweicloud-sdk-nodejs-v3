
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportCertificateAuthorityCertificateResponse extends SdkResponse {
    public certificate?: string;
    private 'certificate_chain'?: string;
    public constructor() { 
        super();
    }
    public withCertificate(certificate: string): ExportCertificateAuthorityCertificateResponse {
        this['certificate'] = certificate;
        return this;
    }
    public withCertificateChain(certificateChain: string): ExportCertificateAuthorityCertificateResponse {
        this['certificate_chain'] = certificateChain;
        return this;
    }
    public set certificateChain(certificateChain: string  | undefined) {
        this['certificate_chain'] = certificateChain;
    }
    public get certificateChain(): string | undefined {
        return this['certificate_chain'];
    }
}