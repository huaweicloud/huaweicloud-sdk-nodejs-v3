

export class DelayUpgradePlanRequestBody {
    public notBefore?: string;
    public constructor(notBefore?: string) { 
        this['notBefore'] = notBefore;
    }
    public withNotBefore(notBefore: string): DelayUpgradePlanRequestBody {
        this['notBefore'] = notBefore;
        return this;
    }
}