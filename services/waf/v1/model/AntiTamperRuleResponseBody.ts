

export class AntiTamperRuleResponseBody {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public hostname?: string;
    public url?: string;
    public constructor() { 
    }
    public withId(id: string): AntiTamperRuleResponseBody {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): AntiTamperRuleResponseBody {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): AntiTamperRuleResponseBody {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): AntiTamperRuleResponseBody {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): AntiTamperRuleResponseBody {
        this['status'] = status;
        return this;
    }
    public withHostname(hostname: string): AntiTamperRuleResponseBody {
        this['hostname'] = hostname;
        return this;
    }
    public withUrl(url: string): AntiTamperRuleResponseBody {
        this['url'] = url;
        return this;
    }
}