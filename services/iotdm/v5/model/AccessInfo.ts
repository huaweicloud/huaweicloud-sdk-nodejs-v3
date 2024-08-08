import { IPWhiteList } from './IPWhiteList';


export class AccessInfo {
    public type?: string;
    public port?: number;
    private 'non_tls_port'?: number;
    private 'websocket_port'?: number;
    private 'domain_name'?: string;
    private 'private_addresses'?: Array<string>;
    private 'public_address'?: Array<string>;
    private 'ipv6_address'?: Array<string>;
    private 'ip_whitelist'?: IPWhiteList;
    public constructor() { 
    }
    public withType(type: string): AccessInfo {
        this['type'] = type;
        return this;
    }
    public withPort(port: number): AccessInfo {
        this['port'] = port;
        return this;
    }
    public withNonTlsPort(nonTlsPort: number): AccessInfo {
        this['non_tls_port'] = nonTlsPort;
        return this;
    }
    public set nonTlsPort(nonTlsPort: number  | undefined) {
        this['non_tls_port'] = nonTlsPort;
    }
    public get nonTlsPort(): number | undefined {
        return this['non_tls_port'];
    }
    public withWebsocketPort(websocketPort: number): AccessInfo {
        this['websocket_port'] = websocketPort;
        return this;
    }
    public set websocketPort(websocketPort: number  | undefined) {
        this['websocket_port'] = websocketPort;
    }
    public get websocketPort(): number | undefined {
        return this['websocket_port'];
    }
    public withDomainName(domainName: string): AccessInfo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withPrivateAddresses(privateAddresses: Array<string>): AccessInfo {
        this['private_addresses'] = privateAddresses;
        return this;
    }
    public set privateAddresses(privateAddresses: Array<string>  | undefined) {
        this['private_addresses'] = privateAddresses;
    }
    public get privateAddresses(): Array<string> | undefined {
        return this['private_addresses'];
    }
    public withPublicAddress(publicAddress: Array<string>): AccessInfo {
        this['public_address'] = publicAddress;
        return this;
    }
    public set publicAddress(publicAddress: Array<string>  | undefined) {
        this['public_address'] = publicAddress;
    }
    public get publicAddress(): Array<string> | undefined {
        return this['public_address'];
    }
    public withIpv6Address(ipv6Address: Array<string>): AccessInfo {
        this['ipv6_address'] = ipv6Address;
        return this;
    }
    public set ipv6Address(ipv6Address: Array<string>  | undefined) {
        this['ipv6_address'] = ipv6Address;
    }
    public get ipv6Address(): Array<string> | undefined {
        return this['ipv6_address'];
    }
    public withIpWhitelist(ipWhitelist: IPWhiteList): AccessInfo {
        this['ip_whitelist'] = ipWhitelist;
        return this;
    }
    public set ipWhitelist(ipWhitelist: IPWhiteList  | undefined) {
        this['ip_whitelist'] = ipWhitelist;
    }
    public get ipWhitelist(): IPWhiteList | undefined {
        return this['ip_whitelist'];
    }
}