

export class BatchCreateGeoIpRuleRequestBody {
    public name?: string;
    public geoip?: string;
    public white?: number;
    private 'ip_type'?: string;
    public description?: string;
    private 'policy_ids'?: Array<string>;
    public constructor(geoip?: string, white?: number, ipType?: string, policyIds?: Array<string>) { 
        this['geoip'] = geoip;
        this['white'] = white;
        this['ip_type'] = ipType;
        this['policy_ids'] = policyIds;
    }
    public withName(name: string): BatchCreateGeoIpRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withGeoip(geoip: string): BatchCreateGeoIpRuleRequestBody {
        this['geoip'] = geoip;
        return this;
    }
    public withWhite(white: number): BatchCreateGeoIpRuleRequestBody {
        this['white'] = white;
        return this;
    }
    public withIpType(ipType: string): BatchCreateGeoIpRuleRequestBody {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): string | undefined {
        return this['ip_type'];
    }
    public withDescription(description: string): BatchCreateGeoIpRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withPolicyIds(policyIds: Array<string>): BatchCreateGeoIpRuleRequestBody {
        this['policy_ids'] = policyIds;
        return this;
    }
    public set policyIds(policyIds: Array<string>  | undefined) {
        this['policy_ids'] = policyIds;
    }
    public get policyIds(): Array<string> | undefined {
        return this['policy_ids'];
    }
}