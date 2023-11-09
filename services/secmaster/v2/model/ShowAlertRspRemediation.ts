

export class ShowAlertRspRemediation {
    public recommendation?: string;
    public url?: string;
    public constructor() { 
    }
    public withRecommendation(recommendation: string): ShowAlertRspRemediation {
        this['recommendation'] = recommendation;
        return this;
    }
    public withUrl(url: string): ShowAlertRspRemediation {
        this['url'] = url;
        return this;
    }
}