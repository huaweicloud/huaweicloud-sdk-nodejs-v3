

export class DnsServersResponseDTO {
    public id?: number;
    private 'is_applied'?: number;
    private 'is_customized'?: number;
    private 'server_ip'?: string;
    public status?: number;
    private 'health_check_domain_name'?: string;
    public constructor() { 
    }
    public withId(id: number): DnsServersResponseDTO {
        this['id'] = id;
        return this;
    }
    public withIsApplied(isApplied: number): DnsServersResponseDTO {
        this['is_applied'] = isApplied;
        return this;
    }
    public set isApplied(isApplied: number  | undefined) {
        this['is_applied'] = isApplied;
    }
    public get isApplied(): number | undefined {
        return this['is_applied'];
    }
    public withIsCustomized(isCustomized: number): DnsServersResponseDTO {
        this['is_customized'] = isCustomized;
        return this;
    }
    public set isCustomized(isCustomized: number  | undefined) {
        this['is_customized'] = isCustomized;
    }
    public get isCustomized(): number | undefined {
        return this['is_customized'];
    }
    public withServerIp(serverIp: string): DnsServersResponseDTO {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string  | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp(): string | undefined {
        return this['server_ip'];
    }
    public withStatus(status: number): DnsServersResponseDTO {
        this['status'] = status;
        return this;
    }
    public withHealthCheckDomainName(healthCheckDomainName: string): DnsServersResponseDTO {
        this['health_check_domain_name'] = healthCheckDomainName;
        return this;
    }
    public set healthCheckDomainName(healthCheckDomainName: string  | undefined) {
        this['health_check_domain_name'] = healthCheckDomainName;
    }
    public get healthCheckDomainName(): string | undefined {
        return this['health_check_domain_name'];
    }
}