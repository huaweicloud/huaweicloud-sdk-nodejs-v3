

export class RestAllowAudienceReqBody {
    public allowAudience?: number;
    public constructor(allowAudience?: number) { 
        this['allowAudience'] = allowAudience;
    }
    public withAllowAudience(allowAudience: number): RestAllowAudienceReqBody {
        this['allowAudience'] = allowAudience;
        return this;
    }
}