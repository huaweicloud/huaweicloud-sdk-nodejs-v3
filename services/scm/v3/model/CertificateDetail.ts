

export class CertificateDetail {
    public id?: string;
    public name?: string;
    public domain?: string;
    public sans?: string;
    private 'signature_algorithm'?: string;
    private 'deploy_support'?: boolean;
    public type?: string;
    public brand?: string;
    private 'expire_time'?: string;
    private 'domain_type'?: string;
    private 'validity_period'?: number;
    public status?: string;
    private 'domain_count'?: number;
    private 'wildcard_count'?: number;
    public description?: string;
    private 'domain_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(id?: string, name?: string, domain?: string, sans?: string, signatureAlgorithm?: string, deploySupport?: boolean, type?: string, brand?: string, expireTime?: string, domainType?: string, validityPeriod?: number, status?: string, domainCount?: number, wildcardCount?: number, description?: string, enterpriseProjectId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['domain'] = domain;
        this['sans'] = sans;
        this['signature_algorithm'] = signatureAlgorithm;
        this['deploy_support'] = deploySupport;
        this['type'] = type;
        this['brand'] = brand;
        this['expire_time'] = expireTime;
        this['domain_type'] = domainType;
        this['validity_period'] = validityPeriod;
        this['status'] = status;
        this['domain_count'] = domainCount;
        this['wildcard_count'] = wildcardCount;
        this['description'] = description;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withId(id: string): CertificateDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CertificateDetail {
        this['name'] = name;
        return this;
    }
    public withDomain(domain: string): CertificateDetail {
        this['domain'] = domain;
        return this;
    }
    public withSans(sans: string): CertificateDetail {
        this['sans'] = sans;
        return this;
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): CertificateDetail {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withDeploySupport(deploySupport: boolean): CertificateDetail {
        this['deploy_support'] = deploySupport;
        return this;
    }
    public set deploySupport(deploySupport: boolean  | undefined) {
        this['deploy_support'] = deploySupport;
    }
    public get deploySupport(): boolean | undefined {
        return this['deploy_support'];
    }
    public withType(type: string): CertificateDetail {
        this['type'] = type;
        return this;
    }
    public withBrand(brand: string): CertificateDetail {
        this['brand'] = brand;
        return this;
    }
    public withExpireTime(expireTime: string): CertificateDetail {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withDomainType(domainType: string): CertificateDetail {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: string  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): string | undefined {
        return this['domain_type'];
    }
    public withValidityPeriod(validityPeriod: number): CertificateDetail {
        this['validity_period'] = validityPeriod;
        return this;
    }
    public set validityPeriod(validityPeriod: number  | undefined) {
        this['validity_period'] = validityPeriod;
    }
    public get validityPeriod(): number | undefined {
        return this['validity_period'];
    }
    public withStatus(status: string): CertificateDetail {
        this['status'] = status;
        return this;
    }
    public withDomainCount(domainCount: number): CertificateDetail {
        this['domain_count'] = domainCount;
        return this;
    }
    public set domainCount(domainCount: number  | undefined) {
        this['domain_count'] = domainCount;
    }
    public get domainCount(): number | undefined {
        return this['domain_count'];
    }
    public withWildcardCount(wildcardCount: number): CertificateDetail {
        this['wildcard_count'] = wildcardCount;
        return this;
    }
    public set wildcardCount(wildcardCount: number  | undefined) {
        this['wildcard_count'] = wildcardCount;
    }
    public get wildcardCount(): number | undefined {
        return this['wildcard_count'];
    }
    public withDescription(description: string): CertificateDetail {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): CertificateDetail {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CertificateDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}