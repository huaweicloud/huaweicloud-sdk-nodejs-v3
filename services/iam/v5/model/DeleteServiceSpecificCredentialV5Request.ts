

export class DeleteServiceSpecificCredentialV5Request {
    private 'credential_id'?: string;
    private 'user_id'?: string;
    public constructor(credentialId?: string, userId?: string) { 
        this['credential_id'] = credentialId;
        this['user_id'] = userId;
    }
    public withCredentialId(credentialId: string): DeleteServiceSpecificCredentialV5Request {
        this['credential_id'] = credentialId;
        return this;
    }
    public set credentialId(credentialId: string  | undefined) {
        this['credential_id'] = credentialId;
    }
    public get credentialId(): string | undefined {
        return this['credential_id'];
    }
    public withUserId(userId: string): DeleteServiceSpecificCredentialV5Request {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}