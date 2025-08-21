

export class ImpersonationToken {
    public id?: number;
    public name?: string;
    public revoked?: boolean;
    private 'created_at'?: string;
    public scopes?: Array<string>;
    public active?: boolean;
    private 'expires_at'?: string;
    public impersonation?: boolean;
    public description?: string;
    public constructor() { 
    }
    public withId(id: number): ImpersonationToken {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ImpersonationToken {
        this['name'] = name;
        return this;
    }
    public withRevoked(revoked: boolean): ImpersonationToken {
        this['revoked'] = revoked;
        return this;
    }
    public withCreatedAt(createdAt: string): ImpersonationToken {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withScopes(scopes: Array<string>): ImpersonationToken {
        this['scopes'] = scopes;
        return this;
    }
    public withActive(active: boolean): ImpersonationToken {
        this['active'] = active;
        return this;
    }
    public withExpiresAt(expiresAt: string): ImpersonationToken {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): string | undefined {
        return this['expires_at'];
    }
    public withImpersonation(impersonation: boolean): ImpersonationToken {
        this['impersonation'] = impersonation;
        return this;
    }
    public withDescription(description: string): ImpersonationToken {
        this['description'] = description;
        return this;
    }
}