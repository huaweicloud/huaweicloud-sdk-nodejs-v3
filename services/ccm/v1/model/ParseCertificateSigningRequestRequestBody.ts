

export class ParseCertificateSigningRequestRequestBody {
    public csr?: string;
    public constructor(csr?: string) { 
        this['csr'] = csr;
    }
    public withCsr(csr: string): ParseCertificateSigningRequestRequestBody {
        this['csr'] = csr;
        return this;
    }
}