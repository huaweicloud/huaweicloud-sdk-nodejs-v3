

export class AlertRemediation {
    public recommendation?: string;
    public url?: string;
    public constructor() { 
    }
    public withRecommendation(recommendation: string): AlertRemediation {
        this['recommendation'] = recommendation;
        return this;
    }
    public withUrl(url: string): AlertRemediation {
        this['url'] = url;
        return this;
    }
}