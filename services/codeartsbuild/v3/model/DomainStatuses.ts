

export class DomainStatuses {
    private 'service_name'?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'free_quota'?: boolean;
    private 'free_package_quota'?: boolean;
    public status?: number;
    private 'is_federation'?: number;
    private 'is_whitelist'?: number;
    public region?: string;
    private 'package_type'?: string;
    private 'domain_type'?: number;
    private 'domain_business_type'?: string;
    private 'domain_malicious_docker_args'?: string;
    private 'allow_custom_env'?: number;
    private 'spec_threshold'?: string;
    public constructor() { 
    }
    public withServiceName(serviceName: string): DomainStatuses {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withDomainId(domainId: string): DomainStatuses {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): DomainStatuses {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withFreeQuota(freeQuota: boolean): DomainStatuses {
        this['free_quota'] = freeQuota;
        return this;
    }
    public set freeQuota(freeQuota: boolean  | undefined) {
        this['free_quota'] = freeQuota;
    }
    public get freeQuota(): boolean | undefined {
        return this['free_quota'];
    }
    public withFreePackageQuota(freePackageQuota: boolean): DomainStatuses {
        this['free_package_quota'] = freePackageQuota;
        return this;
    }
    public set freePackageQuota(freePackageQuota: boolean  | undefined) {
        this['free_package_quota'] = freePackageQuota;
    }
    public get freePackageQuota(): boolean | undefined {
        return this['free_package_quota'];
    }
    public withStatus(status: number): DomainStatuses {
        this['status'] = status;
        return this;
    }
    public withIsFederation(isFederation: number): DomainStatuses {
        this['is_federation'] = isFederation;
        return this;
    }
    public set isFederation(isFederation: number  | undefined) {
        this['is_federation'] = isFederation;
    }
    public get isFederation(): number | undefined {
        return this['is_federation'];
    }
    public withIsWhitelist(isWhitelist: number): DomainStatuses {
        this['is_whitelist'] = isWhitelist;
        return this;
    }
    public set isWhitelist(isWhitelist: number  | undefined) {
        this['is_whitelist'] = isWhitelist;
    }
    public get isWhitelist(): number | undefined {
        return this['is_whitelist'];
    }
    public withRegion(region: string): DomainStatuses {
        this['region'] = region;
        return this;
    }
    public withPackageType(packageType: string): DomainStatuses {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withDomainType(domainType: number): DomainStatuses {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: number  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): number | undefined {
        return this['domain_type'];
    }
    public withDomainBusinessType(domainBusinessType: string): DomainStatuses {
        this['domain_business_type'] = domainBusinessType;
        return this;
    }
    public set domainBusinessType(domainBusinessType: string  | undefined) {
        this['domain_business_type'] = domainBusinessType;
    }
    public get domainBusinessType(): string | undefined {
        return this['domain_business_type'];
    }
    public withDomainMaliciousDockerArgs(domainMaliciousDockerArgs: string): DomainStatuses {
        this['domain_malicious_docker_args'] = domainMaliciousDockerArgs;
        return this;
    }
    public set domainMaliciousDockerArgs(domainMaliciousDockerArgs: string  | undefined) {
        this['domain_malicious_docker_args'] = domainMaliciousDockerArgs;
    }
    public get domainMaliciousDockerArgs(): string | undefined {
        return this['domain_malicious_docker_args'];
    }
    public withAllowCustomEnv(allowCustomEnv: number): DomainStatuses {
        this['allow_custom_env'] = allowCustomEnv;
        return this;
    }
    public set allowCustomEnv(allowCustomEnv: number  | undefined) {
        this['allow_custom_env'] = allowCustomEnv;
    }
    public get allowCustomEnv(): number | undefined {
        return this['allow_custom_env'];
    }
    public withSpecThreshold(specThreshold: string): DomainStatuses {
        this['spec_threshold'] = specThreshold;
        return this;
    }
    public set specThreshold(specThreshold: string  | undefined) {
        this['spec_threshold'] = specThreshold;
    }
    public get specThreshold(): string | undefined {
        return this['spec_threshold'];
    }
}