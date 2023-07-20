import { UpdateDnsServersRequestBodyDnsServer } from './UpdateDnsServersRequestBodyDnsServer';


export class UpdateDnsServersRequestBody {
    private 'dns_server'?: Array<UpdateDnsServersRequestBodyDnsServer>;
    public constructor() { 
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
}