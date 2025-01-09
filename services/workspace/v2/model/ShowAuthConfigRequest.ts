

export class ShowAuthConfigRequest {
    private 'auth_type'?: string;
    public constructor() { 
    }
    public withAuthType(authType: string): ShowAuthConfigRequest {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
}