import { Extension } from './Extension';


export class ProxyProtocolExtension {
    private 'vip_address'?: string;
    private 'ipv6_vip_address'?: string;
    public extension?: Extension;
    public constructor(extension?: Extension) { 
        this['extension'] = extension;
    }
    public withVipAddress(vipAddress: string): ProxyProtocolExtension {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): string | undefined {
        return this['vip_address'];
    }
    public withIpv6VipAddress(ipv6VipAddress: string): ProxyProtocolExtension {
        this['ipv6_vip_address'] = ipv6VipAddress;
        return this;
    }
    public set ipv6VipAddress(ipv6VipAddress: string  | undefined) {
        this['ipv6_vip_address'] = ipv6VipAddress;
    }
    public get ipv6VipAddress(): string | undefined {
        return this['ipv6_vip_address'];
    }
    public withExtension(extension: Extension): ProxyProtocolExtension {
        this['extension'] = extension;
        return this;
    }
}