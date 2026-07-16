

export class AssumeAgencyForPodIdentityRequestBody {
    public token?: string;
    public constructor(token?: string) { 
        this['token'] = token;
    }
    public withToken(token: string): AssumeAgencyForPodIdentityRequestBody {
        this['token'] = token;
        return this;
    }
}