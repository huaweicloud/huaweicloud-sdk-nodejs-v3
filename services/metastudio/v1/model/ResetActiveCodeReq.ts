

export class ResetActiveCodeReq {
    private 'clean_auth_credential'?: boolean;
    public constructor() { 
    }
    public withCleanAuthCredential(cleanAuthCredential: boolean): ResetActiveCodeReq {
        this['clean_auth_credential'] = cleanAuthCredential;
        return this;
    }
    public set cleanAuthCredential(cleanAuthCredential: boolean  | undefined) {
        this['clean_auth_credential'] = cleanAuthCredential;
    }
    public get cleanAuthCredential(): boolean | undefined {
        return this['clean_auth_credential'];
    }
}