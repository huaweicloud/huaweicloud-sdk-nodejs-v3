import { UpdateServerRequestServerCertificate } from './UpdateServerRequestServerCertificate';
import { UpdateServerRequestSslOptions } from './UpdateServerRequestSslOptions';


export class UpdateServerRequest {
    private 'client_cidr'?: string;
    private 'local_subnets'?: Array<string>;
    private 'server_certificate'?: UpdateServerRequestServerCertificate;
    private 'ssl_options'?: UpdateServerRequestSslOptions;
    private 'client_auth_type'?: UpdateServerRequestClientAuthTypeEnum | string;
    private 'dns_servers'?: Array<string>;
    public constructor() { 
    }
    public withClientCidr(clientCidr: string): UpdateServerRequest {
        this['client_cidr'] = clientCidr;
        return this;
    }
    public set clientCidr(clientCidr: string  | undefined) {
        this['client_cidr'] = clientCidr;
    }
    public get clientCidr(): string | undefined {
        return this['client_cidr'];
    }
    public withLocalSubnets(localSubnets: Array<string>): UpdateServerRequest {
        this['local_subnets'] = localSubnets;
        return this;
    }
    public set localSubnets(localSubnets: Array<string>  | undefined) {
        this['local_subnets'] = localSubnets;
    }
    public get localSubnets(): Array<string> | undefined {
        return this['local_subnets'];
    }
    public withServerCertificate(serverCertificate: UpdateServerRequestServerCertificate): UpdateServerRequest {
        this['server_certificate'] = serverCertificate;
        return this;
    }
    public set serverCertificate(serverCertificate: UpdateServerRequestServerCertificate  | undefined) {
        this['server_certificate'] = serverCertificate;
    }
    public get serverCertificate(): UpdateServerRequestServerCertificate | undefined {
        return this['server_certificate'];
    }
    public withSslOptions(sslOptions: UpdateServerRequestSslOptions): UpdateServerRequest {
        this['ssl_options'] = sslOptions;
        return this;
    }
    public set sslOptions(sslOptions: UpdateServerRequestSslOptions  | undefined) {
        this['ssl_options'] = sslOptions;
    }
    public get sslOptions(): UpdateServerRequestSslOptions | undefined {
        return this['ssl_options'];
    }
    public withClientAuthType(clientAuthType: UpdateServerRequestClientAuthTypeEnum | string): UpdateServerRequest {
        this['client_auth_type'] = clientAuthType;
        return this;
    }
    public set clientAuthType(clientAuthType: UpdateServerRequestClientAuthTypeEnum | string  | undefined) {
        this['client_auth_type'] = clientAuthType;
    }
    public get clientAuthType(): UpdateServerRequestClientAuthTypeEnum | string | undefined {
        return this['client_auth_type'];
    }
    public withDnsServers(dnsServers: Array<string>): UpdateServerRequest {
        this['dns_servers'] = dnsServers;
        return this;
    }
    public set dnsServers(dnsServers: Array<string>  | undefined) {
        this['dns_servers'] = dnsServers;
    }
    public get dnsServers(): Array<string> | undefined {
        return this['dns_servers'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateServerRequestClientAuthTypeEnum {
    CERT = 'CERT',
    LOCAL_PASSWORD = 'LOCAL_PASSWORD'
}
