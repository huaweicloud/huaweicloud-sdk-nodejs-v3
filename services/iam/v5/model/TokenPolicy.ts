

export class TokenPolicy {
    private 'token_enabled'?: boolean;
    public constructor(tokenEnabled?: boolean) { 
        this['token_enabled'] = tokenEnabled;
    }
    public withTokenEnabled(tokenEnabled: boolean): TokenPolicy {
        this['token_enabled'] = tokenEnabled;
        return this;
    }
    public set tokenEnabled(tokenEnabled: boolean  | undefined) {
        this['token_enabled'] = tokenEnabled;
    }
    public get tokenEnabled(): boolean | undefined {
        return this['token_enabled'];
    }
}