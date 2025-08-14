

export class SignInOptionsDto {
    public origin?: SignInOptionsDtoOriginEnum | string;
    private 'application_url'?: string;
    public constructor(origin?: string) { 
        this['origin'] = origin;
    }
    public withOrigin(origin: SignInOptionsDtoOriginEnum | string): SignInOptionsDto {
        this['origin'] = origin;
        return this;
    }
    public withApplicationUrl(applicationUrl: string): SignInOptionsDto {
        this['application_url'] = applicationUrl;
        return this;
    }
    public set applicationUrl(applicationUrl: string  | undefined) {
        this['application_url'] = applicationUrl;
    }
    public get applicationUrl(): string | undefined {
        return this['application_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SignInOptionsDtoOriginEnum {
    IDENTITY_CENTER = 'IDENTITY_CENTER',
    APPLICATION = 'APPLICATION'
}
