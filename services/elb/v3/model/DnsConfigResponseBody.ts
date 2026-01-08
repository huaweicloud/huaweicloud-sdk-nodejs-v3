import { EipInfo } from './EipInfo';
import { GlobalEipInfo } from './GlobalEipInfo';


export class DnsConfigResponseBody {
    private 'vip_address'?: string;
    private 'ipv6_vip_address'?: string;
    public eips?: Array<EipInfo>;
    private 'global_eips'?: Array<GlobalEipInfo>;
    private 'public_domain_name_enable'?: boolean;
    private 'public_dns_zone_name'?: string;
    private 'public_dns_zone_id'?: string;
    private 'public_domain_name'?: string;
    private 'public_dns_record_set_ttl'?: number;
    private 'private_domain_name_enable'?: boolean;
    private 'private_dns_zone_name'?: string;
    private 'private_dns_zone_id'?: string;
    private 'private_domain_name'?: string;
    private 'private_dns_zone_type'?: string;
    private 'private_dns_record_set_ttl'?: number;
    public constructor() { 
    }
    public withVipAddress(vipAddress: string): DnsConfigResponseBody {
        this['vip_address'] = vipAddress;
        return this;
    }
    public set vipAddress(vipAddress: string  | undefined) {
        this['vip_address'] = vipAddress;
    }
    public get vipAddress(): string | undefined {
        return this['vip_address'];
    }
    public withIpv6VipAddress(ipv6VipAddress: string): DnsConfigResponseBody {
        this['ipv6_vip_address'] = ipv6VipAddress;
        return this;
    }
    public set ipv6VipAddress(ipv6VipAddress: string  | undefined) {
        this['ipv6_vip_address'] = ipv6VipAddress;
    }
    public get ipv6VipAddress(): string | undefined {
        return this['ipv6_vip_address'];
    }
    public withEips(eips: Array<EipInfo>): DnsConfigResponseBody {
        this['eips'] = eips;
        return this;
    }
    public withGlobalEips(globalEips: Array<GlobalEipInfo>): DnsConfigResponseBody {
        this['global_eips'] = globalEips;
        return this;
    }
    public set globalEips(globalEips: Array<GlobalEipInfo>  | undefined) {
        this['global_eips'] = globalEips;
    }
    public get globalEips(): Array<GlobalEipInfo> | undefined {
        return this['global_eips'];
    }
    public withPublicDomainNameEnable(publicDomainNameEnable: boolean): DnsConfigResponseBody {
        this['public_domain_name_enable'] = publicDomainNameEnable;
        return this;
    }
    public set publicDomainNameEnable(publicDomainNameEnable: boolean  | undefined) {
        this['public_domain_name_enable'] = publicDomainNameEnable;
    }
    public get publicDomainNameEnable(): boolean | undefined {
        return this['public_domain_name_enable'];
    }
    public withPublicDnsZoneName(publicDnsZoneName: string): DnsConfigResponseBody {
        this['public_dns_zone_name'] = publicDnsZoneName;
        return this;
    }
    public set publicDnsZoneName(publicDnsZoneName: string  | undefined) {
        this['public_dns_zone_name'] = publicDnsZoneName;
    }
    public get publicDnsZoneName(): string | undefined {
        return this['public_dns_zone_name'];
    }
    public withPublicDnsZoneId(publicDnsZoneId: string): DnsConfigResponseBody {
        this['public_dns_zone_id'] = publicDnsZoneId;
        return this;
    }
    public set publicDnsZoneId(publicDnsZoneId: string  | undefined) {
        this['public_dns_zone_id'] = publicDnsZoneId;
    }
    public get publicDnsZoneId(): string | undefined {
        return this['public_dns_zone_id'];
    }
    public withPublicDomainName(publicDomainName: string): DnsConfigResponseBody {
        this['public_domain_name'] = publicDomainName;
        return this;
    }
    public set publicDomainName(publicDomainName: string  | undefined) {
        this['public_domain_name'] = publicDomainName;
    }
    public get publicDomainName(): string | undefined {
        return this['public_domain_name'];
    }
    public withPublicDnsRecordSetTtl(publicDnsRecordSetTtl: number): DnsConfigResponseBody {
        this['public_dns_record_set_ttl'] = publicDnsRecordSetTtl;
        return this;
    }
    public set publicDnsRecordSetTtl(publicDnsRecordSetTtl: number  | undefined) {
        this['public_dns_record_set_ttl'] = publicDnsRecordSetTtl;
    }
    public get publicDnsRecordSetTtl(): number | undefined {
        return this['public_dns_record_set_ttl'];
    }
    public withPrivateDomainNameEnable(privateDomainNameEnable: boolean): DnsConfigResponseBody {
        this['private_domain_name_enable'] = privateDomainNameEnable;
        return this;
    }
    public set privateDomainNameEnable(privateDomainNameEnable: boolean  | undefined) {
        this['private_domain_name_enable'] = privateDomainNameEnable;
    }
    public get privateDomainNameEnable(): boolean | undefined {
        return this['private_domain_name_enable'];
    }
    public withPrivateDnsZoneName(privateDnsZoneName: string): DnsConfigResponseBody {
        this['private_dns_zone_name'] = privateDnsZoneName;
        return this;
    }
    public set privateDnsZoneName(privateDnsZoneName: string  | undefined) {
        this['private_dns_zone_name'] = privateDnsZoneName;
    }
    public get privateDnsZoneName(): string | undefined {
        return this['private_dns_zone_name'];
    }
    public withPrivateDnsZoneId(privateDnsZoneId: string): DnsConfigResponseBody {
        this['private_dns_zone_id'] = privateDnsZoneId;
        return this;
    }
    public set privateDnsZoneId(privateDnsZoneId: string  | undefined) {
        this['private_dns_zone_id'] = privateDnsZoneId;
    }
    public get privateDnsZoneId(): string | undefined {
        return this['private_dns_zone_id'];
    }
    public withPrivateDomainName(privateDomainName: string): DnsConfigResponseBody {
        this['private_domain_name'] = privateDomainName;
        return this;
    }
    public set privateDomainName(privateDomainName: string  | undefined) {
        this['private_domain_name'] = privateDomainName;
    }
    public get privateDomainName(): string | undefined {
        return this['private_domain_name'];
    }
    public withPrivateDnsZoneType(privateDnsZoneType: string): DnsConfigResponseBody {
        this['private_dns_zone_type'] = privateDnsZoneType;
        return this;
    }
    public set privateDnsZoneType(privateDnsZoneType: string  | undefined) {
        this['private_dns_zone_type'] = privateDnsZoneType;
    }
    public get privateDnsZoneType(): string | undefined {
        return this['private_dns_zone_type'];
    }
    public withPrivateDnsRecordSetTtl(privateDnsRecordSetTtl: number): DnsConfigResponseBody {
        this['private_dns_record_set_ttl'] = privateDnsRecordSetTtl;
        return this;
    }
    public set privateDnsRecordSetTtl(privateDnsRecordSetTtl: number  | undefined) {
        this['private_dns_record_set_ttl'] = privateDnsRecordSetTtl;
    }
    public get privateDnsRecordSetTtl(): number | undefined {
        return this['private_dns_record_set_ttl'];
    }
}