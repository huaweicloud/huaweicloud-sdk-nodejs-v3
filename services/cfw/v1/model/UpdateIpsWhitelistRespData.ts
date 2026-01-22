

export class UpdateIpsWhitelistRespData {
    private 'ips_whitelist_id'?: string;
    public constructor() { 
    }
    public withIpsWhitelistId(ipsWhitelistId: string): UpdateIpsWhitelistRespData {
        this['ips_whitelist_id'] = ipsWhitelistId;
        return this;
    }
    public set ipsWhitelistId(ipsWhitelistId: string  | undefined) {
        this['ips_whitelist_id'] = ipsWhitelistId;
    }
    public get ipsWhitelistId(): string | undefined {
        return this['ips_whitelist_id'];
    }
}