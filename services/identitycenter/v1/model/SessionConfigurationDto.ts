

export class SessionConfigurationDto {
    private 'max_authentication_age'?: string;
    public constructor(maxAuthenticationAge?: string) { 
        this['max_authentication_age'] = maxAuthenticationAge;
    }
    public withMaxAuthenticationAge(maxAuthenticationAge: string): SessionConfigurationDto {
        this['max_authentication_age'] = maxAuthenticationAge;
        return this;
    }
    public set maxAuthenticationAge(maxAuthenticationAge: string  | undefined) {
        this['max_authentication_age'] = maxAuthenticationAge;
    }
    public get maxAuthenticationAge(): string | undefined {
        return this['max_authentication_age'];
    }
}