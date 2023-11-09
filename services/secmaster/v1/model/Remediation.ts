

export class Remediation {
    public recommendation?: string;
    public url?: string;
    public constructor(recommendation?: string) { 
        this['recommendation'] = recommendation;
    }
    public withRecommendation(recommendation: string): Remediation {
        this['recommendation'] = recommendation;
        return this;
    }
    public withUrl(url: string): Remediation {
        this['url'] = url;
        return this;
    }
}