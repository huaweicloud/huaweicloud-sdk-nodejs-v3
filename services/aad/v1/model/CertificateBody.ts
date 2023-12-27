

export class CertificateBody {
    private 'op_type'?: number;
    private 'cert_name'?: string;
    private 'cert_file'?: string;
    private 'cert_key_file'?: string;
    private 'domain_id'?: string;
    public constructor(opType?: number, certName?: string, domainId?: string) { 
        this['op_type'] = opType;
        this['cert_name'] = certName;
        this['domain_id'] = domainId;
    }
    public withOpType(opType: number): CertificateBody {
        this['op_type'] = opType;
        return this;
    }
    public set opType(opType: number  | undefined) {
        this['op_type'] = opType;
    }
    public get opType(): number | undefined {
        return this['op_type'];
    }
    public withCertName(certName: string): CertificateBody {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withCertFile(certFile: string): CertificateBody {
        this['cert_file'] = certFile;
        return this;
    }
    public set certFile(certFile: string  | undefined) {
        this['cert_file'] = certFile;
    }
    public get certFile(): string | undefined {
        return this['cert_file'];
    }
    public withCertKeyFile(certKeyFile: string): CertificateBody {
        this['cert_key_file'] = certKeyFile;
        return this;
    }
    public set certKeyFile(certKeyFile: string  | undefined) {
        this['cert_key_file'] = certKeyFile;
    }
    public get certKeyFile(): string | undefined {
        return this['cert_key_file'];
    }
    public withDomainId(domainId: string): CertificateBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}