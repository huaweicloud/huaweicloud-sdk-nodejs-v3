

export class UpdateTokenPolicyReqBody {
    private 'token_enabled'?: boolean;
    public constructor() { 
    }
    public withTokenEnabled(tokenEnabled: boolean): UpdateTokenPolicyReqBody {
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