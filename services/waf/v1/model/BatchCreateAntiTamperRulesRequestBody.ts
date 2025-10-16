

export class BatchCreateAntiTamperRulesRequestBody {
    public hostname?: string;
    public url?: string;
    public description?: string;
    private 'policy_ids'?: Array<string>;
    public constructor(hostname?: string, url?: string) { 
        this['hostname'] = hostname;
        this['url'] = url;
    }
    public withHostname(hostname: string): BatchCreateAntiTamperRulesRequestBody {
        this['hostname'] = hostname;
        return this;
    }
    public withUrl(url: string): BatchCreateAntiTamperRulesRequestBody {
        this['url'] = url;
        return this;
    }
    public withDescription(description: string): BatchCreateAntiTamperRulesRequestBody {
        this['description'] = description;
        return this;
    }
    public withPolicyIds(policyIds: Array<string>): BatchCreateAntiTamperRulesRequestBody {
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