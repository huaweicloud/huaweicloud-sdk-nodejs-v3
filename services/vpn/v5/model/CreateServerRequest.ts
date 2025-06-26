import { CreateServerRequestClientCaCertificates } from './CreateServerRequestClientCaCertificates';
import { CreateServerRequestServerCertificate } from './CreateServerRequestServerCertificate';
import { CreateServerRequestSslOptions } from './CreateServerRequestSslOptions';


export class CreateServerRequest {
    private 'tunnel_protocol'?: CreateServerRequestTunnelProtocolEnum | string;
    private 'client_cidr'?: string;
    private 'local_subnets'?: Array<string>;
    private 'client_auth_type'?: CreateServerRequestClientAuthTypeEnum | string;
    private 'server_certificate'?: CreateServerRequestServerCertificate;
    private 'client_ca_certificates'?: Array<CreateServerRequestClientCaCertificates>;
    private 'ssl_options'?: CreateServerRequestSslOptions;
    private 'dns_servers'?: Array<string>;
    public constructor(clientCidr?: string, localSubnets?: Array<string>) { 
        this['client_cidr'] = clientCidr;
        this['local_subnets'] = localSubnets;
    }
    public withTunnelProtocol(tunnelProtocol: CreateServerRequestTunnelProtocolEnum | string): CreateServerRequest {
        this['tunnel_protocol'] = tunnelProtocol;
        return this;
    }
    public set tunnelProtocol(tunnelProtocol: CreateServerRequestTunnelProtocolEnum | string  | undefined) {
        this['tunnel_protocol'] = tunnelProtocol;
    }
    public get tunnelProtocol(): CreateServerRequestTunnelProtocolEnum | string | undefined {
        return this['tunnel_protocol'];
    }
    public withClientCidr(clientCidr: string): CreateServerRequest {
        this['client_cidr'] = clientCidr;
        return this;
    }
    public set clientCidr(clientCidr: string  | undefined) {
        this['client_cidr'] = clientCidr;
    }
    public get clientCidr(): string | undefined {
        return this['client_cidr'];
    }
    public withLocalSubnets(localSubnets: Array<string>): CreateServerRequest {
        this['local_subnets'] = localSubnets;
        return this;
    }
    public set localSubnets(localSubnets: Array<string>  | undefined) {
        this['local_subnets'] = localSubnets;
    }
    public get localSubnets(): Array<string> | undefined {
        return this['local_subnets'];
    }
    public withClientAuthType(clientAuthType: CreateServerRequestClientAuthTypeEnum | string): CreateServerRequest {
        this['client_auth_type'] = clientAuthType;
        return this;
    }
    public set clientAuthType(clientAuthType: CreateServerRequestClientAuthTypeEnum | string  | undefined) {
        this['client_auth_type'] = clientAuthType;
    }
    public get clientAuthType(): CreateServerRequestClientAuthTypeEnum | string | undefined {
        return this['client_auth_type'];
    }
    public withServerCertificate(serverCertificate: CreateServerRequestServerCertificate): CreateServerRequest {
        this['server_certificate'] = serverCertificate;
        return this;
    }
    public set serverCertificate(serverCertificate: CreateServerRequestServerCertificate  | undefined) {
        this['server_certificate'] = serverCertificate;
    }
    public get serverCertificate(): CreateServerRequestServerCertificate | undefined {
        return this['server_certificate'];
    }
    public withClientCaCertificates(clientCaCertificates: Array<CreateServerRequestClientCaCertificates>): CreateServerRequest {
        this['client_ca_certificates'] = clientCaCertificates;
        return this;
    }
    public set clientCaCertificates(clientCaCertificates: Array<CreateServerRequestClientCaCertificates>  | undefined) {
        this['client_ca_certificates'] = clientCaCertificates;
    }
    public get clientCaCertificates(): Array<CreateServerRequestClientCaCertificates> | undefined {
        return this['client_ca_certificates'];
    }
    public withSslOptions(sslOptions: CreateServerRequestSslOptions): CreateServerRequest {
        this['ssl_options'] = sslOptions;
        return this;
    }
    public set sslOptions(sslOptions: CreateServerRequestSslOptions  | undefined) {
        this['ssl_options'] = sslOptions;
    }
    public get sslOptions(): CreateServerRequestSslOptions | undefined {
        return this['ssl_options'];
    }
    public withDnsServers(dnsServers: Array<string>): CreateServerRequest {
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
export enum CreateServerRequestTunnelProtocolEnum {
    SSL = 'SSL'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateServerRequestClientAuthTypeEnum {
    CERT = 'CERT',
    LOCAL_PASSWORD = 'LOCAL_PASSWORD'
}
