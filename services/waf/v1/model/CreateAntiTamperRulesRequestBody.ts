

export class CreateAntiTamperRulesRequestBody {
    public hostname: string;
    public url: string;
    public description?: string;
    public constructor(hostname?: any, url?: any) { 
        this['hostname'] = hostname;
        this['url'] = url;
    }
    public withHostname(hostname: string): CreateAntiTamperRulesRequestBody {
        this['hostname'] = hostname;
        return this;
    }
    public withUrl(url: string): CreateAntiTamperRulesRequestBody {
        this['url'] = url;
        return this;
    }
    public withDescription(description: string): CreateAntiTamperRulesRequestBody {
        this['description'] = description;
        return this;
    }
}