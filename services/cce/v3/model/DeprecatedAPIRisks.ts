

export class DeprecatedAPIRisks {
    public url?: string;
    public userAgent?: string;
    public constructor() { 
    }
    public withUrl(url: string): DeprecatedAPIRisks {
        this['url'] = url;
        return this;
    }
    public withUserAgent(userAgent: string): DeprecatedAPIRisks {
        this['userAgent'] = userAgent;
        return this;
    }
}