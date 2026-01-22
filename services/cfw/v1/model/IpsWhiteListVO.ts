

export class IpsWhiteListVO {
    private 'source_address'?: string;
    private 'dest_address'?: string;
    public name?: string;
    private 'list_id'?: string;
    private 'effective_scopes'?: Array<string>;
    private 'ips_id'?: string;
    private 'ip_version'?: number;
    public description?: string;
    public constructor() { 
    }
    public withSourceAddress(sourceAddress: string): IpsWhiteListVO {
        this['source_address'] = sourceAddress;
        return this;
    }
    public set sourceAddress(sourceAddress: string  | undefined) {
        this['source_address'] = sourceAddress;
    }
    public get sourceAddress(): string | undefined {
        return this['source_address'];
    }
    public withDestAddress(destAddress: string): IpsWhiteListVO {
        this['dest_address'] = destAddress;
        return this;
    }
    public set destAddress(destAddress: string  | undefined) {
        this['dest_address'] = destAddress;
    }
    public get destAddress(): string | undefined {
        return this['dest_address'];
    }
    public withName(name: string): IpsWhiteListVO {
        this['name'] = name;
        return this;
    }
    public withListId(listId: string): IpsWhiteListVO {
        this['list_id'] = listId;
        return this;
    }
    public set listId(listId: string  | undefined) {
        this['list_id'] = listId;
    }
    public get listId(): string | undefined {
        return this['list_id'];
    }
    public withEffectiveScopes(effectiveScopes: Array<string>): IpsWhiteListVO {
        this['effective_scopes'] = effectiveScopes;
        return this;
    }
    public set effectiveScopes(effectiveScopes: Array<string>  | undefined) {
        this['effective_scopes'] = effectiveScopes;
    }
    public get effectiveScopes(): Array<string> | undefined {
        return this['effective_scopes'];
    }
    public withIpsId(ipsId: string): IpsWhiteListVO {
        this['ips_id'] = ipsId;
        return this;
    }
    public set ipsId(ipsId: string  | undefined) {
        this['ips_id'] = ipsId;
    }
    public get ipsId(): string | undefined {
        return this['ips_id'];
    }
    public withIpVersion(ipVersion: number): IpsWhiteListVO {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withDescription(description: string): IpsWhiteListVO {
        this['description'] = description;
        return this;
    }
}