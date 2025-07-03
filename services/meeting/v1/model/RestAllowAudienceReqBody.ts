

export class RestAllowAudienceReqBody {
    public allowAudience?: number;
    public constructor() { 
    }
    public withAllowAudience(allowAudience: number): RestAllowAudienceReqBody {
        this['allowAudience'] = allowAudience;
        return this;
    }
}