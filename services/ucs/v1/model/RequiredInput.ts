

export class RequiredInput {
    private 'USERNAME'?: string;
    private 'MASTER-1'?: string;
    private 'MASTER-2'?: string;
    private 'MASTER-3'?: string;
    private 'ACCESS_EXTERNAL_LOAD_BALANCE'?: boolean;
    private 'CILIUM_IPV4POOL_CIDR'?: string;
    private 'NETWORK_CIDR'?: string;
    private 'DNS_SERVER_IP'?: string;
    private 'NTP_SERVER_IP'?: string;
    private 'IAM_DOMAIN_ID'?: string;
    public constructor() { 
    }
    public withUsername(username: string): RequiredInput {
        this['USERNAME'] = username;
        return this;
    }
    public set username(username: string  | undefined) {
        this['USERNAME'] = username;
    }
    public get username(): string | undefined {
        return this['USERNAME'];
    }
    public withMaster1(master1: string): RequiredInput {
        this['MASTER-1'] = master1;
        return this;
    }
    public set master1(master1: string  | undefined) {
        this['MASTER-1'] = master1;
    }
    public get master1(): string | undefined {
        return this['MASTER-1'];
    }
    public withMaster2(master2: string): RequiredInput {
        this['MASTER-2'] = master2;
        return this;
    }
    public set master2(master2: string  | undefined) {
        this['MASTER-2'] = master2;
    }
    public get master2(): string | undefined {
        return this['MASTER-2'];
    }
    public withMaster3(master3: string): RequiredInput {
        this['MASTER-3'] = master3;
        return this;
    }
    public set master3(master3: string  | undefined) {
        this['MASTER-3'] = master3;
    }
    public get master3(): string | undefined {
        return this['MASTER-3'];
    }
    public withAccessExternalLoadBalance(accessExternalLoadBalance: boolean): RequiredInput {
        this['ACCESS_EXTERNAL_LOAD_BALANCE'] = accessExternalLoadBalance;
        return this;
    }
    public set accessExternalLoadBalance(accessExternalLoadBalance: boolean  | undefined) {
        this['ACCESS_EXTERNAL_LOAD_BALANCE'] = accessExternalLoadBalance;
    }
    public get accessExternalLoadBalance(): boolean | undefined {
        return this['ACCESS_EXTERNAL_LOAD_BALANCE'];
    }
    public withCiliumIpv4poolCidr(ciliumIpv4poolCidr: string): RequiredInput {
        this['CILIUM_IPV4POOL_CIDR'] = ciliumIpv4poolCidr;
        return this;
    }
    public set ciliumIpv4poolCidr(ciliumIpv4poolCidr: string  | undefined) {
        this['CILIUM_IPV4POOL_CIDR'] = ciliumIpv4poolCidr;
    }
    public get ciliumIpv4poolCidr(): string | undefined {
        return this['CILIUM_IPV4POOL_CIDR'];
    }
    public withNetworkCidr(networkCidr: string): RequiredInput {
        this['NETWORK_CIDR'] = networkCidr;
        return this;
    }
    public set networkCidr(networkCidr: string  | undefined) {
        this['NETWORK_CIDR'] = networkCidr;
    }
    public get networkCidr(): string | undefined {
        return this['NETWORK_CIDR'];
    }
    public withDnsServerIp(dnsServerIp: string): RequiredInput {
        this['DNS_SERVER_IP'] = dnsServerIp;
        return this;
    }
    public set dnsServerIp(dnsServerIp: string  | undefined) {
        this['DNS_SERVER_IP'] = dnsServerIp;
    }
    public get dnsServerIp(): string | undefined {
        return this['DNS_SERVER_IP'];
    }
    public withNtpServerIp(ntpServerIp: string): RequiredInput {
        this['NTP_SERVER_IP'] = ntpServerIp;
        return this;
    }
    public set ntpServerIp(ntpServerIp: string  | undefined) {
        this['NTP_SERVER_IP'] = ntpServerIp;
    }
    public get ntpServerIp(): string | undefined {
        return this['NTP_SERVER_IP'];
    }
    public withIamDomainId(iamDomainId: string): RequiredInput {
        this['IAM_DOMAIN_ID'] = iamDomainId;
        return this;
    }
    public set iamDomainId(iamDomainId: string  | undefined) {
        this['IAM_DOMAIN_ID'] = iamDomainId;
    }
    public get iamDomainId(): string | undefined {
        return this['IAM_DOMAIN_ID'];
    }
}