

export class AuthorizeScheduledEventRequestBody {
    private 'authorization_type'?: string;
    private 'not_before'?: string;
    public constructor(authorizationType?: string) { 
        this['authorization_type'] = authorizationType;
    }
    public withAuthorizationType(authorizationType: string): AuthorizeScheduledEventRequestBody {
        this['authorization_type'] = authorizationType;
        return this;
    }
    public set authorizationType(authorizationType: string  | undefined) {
        this['authorization_type'] = authorizationType;
    }
    public get authorizationType(): string | undefined {
        return this['authorization_type'];
    }
    public withNotBefore(notBefore: string): AuthorizeScheduledEventRequestBody {
        this['not_before'] = notBefore;
        return this;
    }
    public set notBefore(notBefore: string  | undefined) {
        this['not_before'] = notBefore;
    }
    public get notBefore(): string | undefined {
        return this['not_before'];
    }
}