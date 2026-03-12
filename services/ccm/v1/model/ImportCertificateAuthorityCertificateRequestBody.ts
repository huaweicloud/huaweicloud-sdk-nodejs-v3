

export class ImportCertificateAuthorityCertificateRequestBody {
    public certificate?: string;
    private 'certificate_chain'?: string;
    public constructor(certificate?: string) { 
        this['certificate'] = certificate;
    }
    public withCertificate(certificate: string): ImportCertificateAuthorityCertificateRequestBody {
        this['certificate'] = certificate;
        return this;
    }
    public withCertificateChain(certificateChain: string): ImportCertificateAuthorityCertificateRequestBody {
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