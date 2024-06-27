import { UpdateDnsServersRequestBodyDnsServer } from './UpdateDnsServersRequestBodyDnsServer';


export class UpdateDnsServersRequestBody {
    private 'dns_server'?: Array<UpdateDnsServersRequestBodyDnsServer>;
    private 'health_check_domain_name'?: string;
    public constructor(dnsServer?: Array<UpdateDnsServersRequestBodyDnsServer>) { 
        this['dns_server'] = dnsServer;
    }
    public withDnsServer(dnsServer: Array<UpdateDnsServersRequestBodyDnsServer>): UpdateDnsServersRequestBody {
        this['dns_server'] = dnsServer;
        return this;
    }
    public set dnsServer(dnsServer: Array<UpdateDnsServersRequestBodyDnsServer>  | undefined) {
        this['dns_server'] = dnsServer;
    }
    public get dnsServer(): Array<UpdateDnsServersRequestBodyDnsServer> | undefined {
        return this['dns_server'];
    }
    public withHealthCheckDomainName(healthCheckDomainName: string): UpdateDnsServersRequestBody {
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