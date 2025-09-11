import { QueryClientCaCertificateBody } from './QueryClientCaCertificateBody';
import { ShowServerResponseServerCertificate } from './ShowServerResponseServerCertificate';
import { ShowServerResponseSslOptions } from './ShowServerResponseSslOptions';


export class ShowServerResponse {
    public id?: string;
    private 'p2c_vgw_id'?: string;
    private 'client_cidr'?: string;
    private 'local_subnets'?: Array<string>;
    private 'client_auth_type'?: string;
    private 'tunnel_protocol'?: string;
    private 'server_certificate'?: ShowServerResponseServerCertificate;
    private 'client_ca_certificates'?: Array<QueryClientCaCertificateBody>;
    private 'ssl_options'?: ShowServerResponseSslOptions;
    private 'dns_servers'?: Array<string>;
    private 'idp_name'?: string;
    public status?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): ShowServerResponse {
        this['id'] = id;
        return this;
    }
    public withP2cVgwId(p2cVgwId: string): ShowServerResponse {
        this['p2c_vgw_id'] = p2cVgwId;
        return this;
    }
    public set p2cVgwId(p2cVgwId: string  | undefined) {
        this['p2c_vgw_id'] = p2cVgwId;
    }
    public get p2cVgwId(): string | undefined {
        return this['p2c_vgw_id'];
    }
    public withClientCidr(clientCidr: string): ShowServerResponse {
        this['client_cidr'] = clientCidr;
        return this;
    }
    public set clientCidr(clientCidr: string  | undefined) {
        this['client_cidr'] = clientCidr;
    }
    public get clientCidr(): string | undefined {
        return this['client_cidr'];
    }
    public withLocalSubnets(localSubnets: Array<string>): ShowServerResponse {
        this['local_subnets'] = localSubnets;
        return this;
    }
    public set localSubnets(localSubnets: Array<string>  | undefined) {
        this['local_subnets'] = localSubnets;
    }
    public get localSubnets(): Array<string> | undefined {
        return this['local_subnets'];
    }
    public withClientAuthType(clientAuthType: string): ShowServerResponse {
        this['client_auth_type'] = clientAuthType;
        return this;
    }
    public set clientAuthType(clientAuthType: string  | undefined) {
        this['client_auth_type'] = clientAuthType;
    }
    public get clientAuthType(): string | undefined {
        return this['client_auth_type'];
    }
    public withTunnelProtocol(tunnelProtocol: string): ShowServerResponse {
        this['tunnel_protocol'] = tunnelProtocol;
        return this;
    }
    public set tunnelProtocol(tunnelProtocol: string  | undefined) {
        this['tunnel_protocol'] = tunnelProtocol;
    }
    public get tunnelProtocol(): string | undefined {
        return this['tunnel_protocol'];
    }
    public withServerCertificate(serverCertificate: ShowServerResponseServerCertificate): ShowServerResponse {
        this['server_certificate'] = serverCertificate;
        return this;
    }
    public set serverCertificate(serverCertificate: ShowServerResponseServerCertificate  | undefined) {
        this['server_certificate'] = serverCertificate;
    }
    public get serverCertificate(): ShowServerResponseServerCertificate | undefined {
        return this['server_certificate'];
    }
    public withClientCaCertificates(clientCaCertificates: Array<QueryClientCaCertificateBody>): ShowServerResponse {
        this['client_ca_certificates'] = clientCaCertificates;
        return this;
    }
    public set clientCaCertificates(clientCaCertificates: Array<QueryClientCaCertificateBody>  | undefined) {
        this['client_ca_certificates'] = clientCaCertificates;
    }
    public get clientCaCertificates(): Array<QueryClientCaCertificateBody> | undefined {
        return this['client_ca_certificates'];
    }
    public withSslOptions(sslOptions: ShowServerResponseSslOptions): ShowServerResponse {
        this['ssl_options'] = sslOptions;
        return this;
    }
    public set sslOptions(sslOptions: ShowServerResponseSslOptions  | undefined) {
        this['ssl_options'] = sslOptions;
    }
    public get sslOptions(): ShowServerResponseSslOptions | undefined {
        return this['ssl_options'];
    }
    public withDnsServers(dnsServers: Array<string>): ShowServerResponse {
        this['dns_servers'] = dnsServers;
        return this;
    }
    public set dnsServers(dnsServers: Array<string>  | undefined) {
        this['dns_servers'] = dnsServers;
    }
    public get dnsServers(): Array<string> | undefined {
        return this['dns_servers'];
    }
    public withIdpName(idpName: string): ShowServerResponse {
        this['idp_name'] = idpName;
        return this;
    }
    public set idpName(idpName: string  | undefined) {
        this['idp_name'] = idpName;
    }
    public get idpName(): string | undefined {
        return this['idp_name'];
    }
    public withStatus(status: string): ShowServerResponse {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): ShowServerResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ShowServerResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}