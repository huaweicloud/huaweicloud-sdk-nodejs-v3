

export class UpdateHttpsPasswordSetting {
    private 'https_clone_iam_auth'?: string;
    public constructor() { 
    }
    public withHttpsCloneIamAuth(httpsCloneIamAuth: string): UpdateHttpsPasswordSetting {
        this['https_clone_iam_auth'] = httpsCloneIamAuth;
        return this;
    }
    public set httpsCloneIamAuth(httpsCloneIamAuth: string  | undefined) {
        this['https_clone_iam_auth'] = httpsCloneIamAuth;
    }
    public get httpsCloneIamAuth(): string | undefined {
        return this['https_clone_iam_auth'];
    }
}