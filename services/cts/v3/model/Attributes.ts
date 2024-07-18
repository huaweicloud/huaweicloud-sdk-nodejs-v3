

export class Attributes {
    private 'created_at'?: string;
    private 'mfa_authenticated'?: string;
    public constructor() { 
    }
    public withCreatedAt(createdAt: string): Attributes {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withMfaAuthenticated(mfaAuthenticated: string): Attributes {
        this['mfa_authenticated'] = mfaAuthenticated;
        return this;
    }
    public set mfaAuthenticated(mfaAuthenticated: string  | undefined) {
        this['mfa_authenticated'] = mfaAuthenticated;
    }
    public get mfaAuthenticated(): string | undefined {
        return this['mfa_authenticated'];
    }
}