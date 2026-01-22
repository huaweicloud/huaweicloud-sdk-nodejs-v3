

export class UpdateIpsWhitelistDto {
    private 'source_address'?: string;
    private 'dest_address'?: string;
    private 'ip_version'?: number;
    public name?: string;
    private 'ips_id'?: string;
    private 'effective_scopes'?: Array<string>;
    public description?: string;
    public constructor(sourceAddress?: string, destAddress?: string, ipVersion?: number, name?: string, effectiveScopes?: Array<string>) { 
        this['source_address'] = sourceAddress;
        this['dest_address'] = destAddress;
        this['ip_version'] = ipVersion;
        this['name'] = name;
        this['effective_scopes'] = effectiveScopes;
    }
    public withSourceAddress(sourceAddress: string): UpdateIpsWhitelistDto {
        this['source_address'] = sourceAddress;
        return this;
    }
    public set sourceAddress(sourceAddress: string  | undefined) {
        this['source_address'] = sourceAddress;
    }
    public get sourceAddress(): string | undefined {
        return this['source_address'];
    }
    public withDestAddress(destAddress: string): UpdateIpsWhitelistDto {
        this['dest_address'] = destAddress;
        return this;
    }
    public set destAddress(destAddress: string  | undefined) {
        this['dest_address'] = destAddress;
    }
    public get destAddress(): string | undefined {
        return this['dest_address'];
    }
    public withIpVersion(ipVersion: number): UpdateIpsWhitelistDto {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withName(name: string): UpdateIpsWhitelistDto {
        this['name'] = name;
        return this;
    }
    public withIpsId(ipsId: string): UpdateIpsWhitelistDto {
        this['ips_id'] = ipsId;
        return this;
    }
    public set ipsId(ipsId: string  | undefined) {
        this['ips_id'] = ipsId;
    }
    public get ipsId(): string | undefined {
        return this['ips_id'];
    }
    public withEffectiveScopes(effectiveScopes: Array<string>): UpdateIpsWhitelistDto {
        this['effective_scopes'] = effectiveScopes;
        return this;
    }
    public set effectiveScopes(effectiveScopes: Array<string>  | undefined) {
        this['effective_scopes'] = effectiveScopes;
    }
    public get effectiveScopes(): Array<string> | undefined {
        return this['effective_scopes'];
    }
    public withDescription(description: string): UpdateIpsWhitelistDto {
        this['description'] = description;
        return this;
    }
}