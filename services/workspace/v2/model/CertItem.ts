

export class CertItem {
    private 'tenant_id'?: string;
    private 'cert_id'?: string;
    private 'common_name'?: string;
    public type?: string;
    public status?: string;
    private 'key_algorithm'?: string;
    private 'signature_algorithm'?: string;
    public apply?: string;
    private 'not_before'?: string;
    private 'not_after'?: string;
    public constructor() { 
    }
    public withTenantId(tenantId: string): CertItem {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withCertId(certId: string): CertItem {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withCommonName(commonName: string): CertItem {
        this['common_name'] = commonName;
        return this;
    }
    public set commonName(commonName: string  | undefined) {
        this['common_name'] = commonName;
    }
    public get commonName(): string | undefined {
        return this['common_name'];
    }
    public withType(type: string): CertItem {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): CertItem {
        this['status'] = status;
        return this;
    }
    public withKeyAlgorithm(keyAlgorithm: string): CertItem {
        this['key_algorithm'] = keyAlgorithm;
        return this;
    }
    public set keyAlgorithm(keyAlgorithm: string  | undefined) {
        this['key_algorithm'] = keyAlgorithm;
    }
    public get keyAlgorithm(): string | undefined {
        return this['key_algorithm'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): CertItem {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withApply(apply: string): CertItem {
        this['apply'] = apply;
        return this;
    }
    public withNotBefore(notBefore: string): CertItem {
        this['not_before'] = notBefore;
        return this;
    }
    public set notBefore(notBefore: string  | undefined) {
        this['not_before'] = notBefore;
    }
    public get notBefore(): string | undefined {
        return this['not_before'];
    }
    public withNotAfter(notAfter: string): CertItem {
        this['not_after'] = notAfter;
        return this;
    }
    public set notAfter(notAfter: string  | undefined) {
        this['not_after'] = notAfter;
    }
    public get notAfter(): string | undefined {
        return this['not_after'];
    }
}