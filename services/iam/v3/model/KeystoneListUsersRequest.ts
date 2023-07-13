

export class KeystoneListUsersRequest {
    private 'domain_id'?: string | undefined;
    public enabled?: boolean;
    public name?: string;
    private 'password_expires_at'?: string | undefined;
    public constructor() { 
    }
    public withDomainId(domainId: string): KeystoneListUsersRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withEnabled(enabled: boolean): KeystoneListUsersRequest {
        this['enabled'] = enabled;
        return this;
    }
    public withName(name: string): KeystoneListUsersRequest {
        this['name'] = name;
        return this;
    }
    public withPasswordExpiresAt(passwordExpiresAt: string): KeystoneListUsersRequest {
        this['password_expires_at'] = passwordExpiresAt;
        return this;
    }
    public set passwordExpiresAt(passwordExpiresAt: string | undefined) {
        this['password_expires_at'] = passwordExpiresAt;
    }
    public get passwordExpiresAt() {
        return this['password_expires_at'];
    }
}