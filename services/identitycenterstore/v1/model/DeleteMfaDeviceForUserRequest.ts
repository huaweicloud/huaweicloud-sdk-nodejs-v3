

export class DeleteMfaDeviceForUserRequest {
    private 'X-Security-Token'?: string;
    private 'identity_store_id'?: string;
    private 'user_id'?: string;
    private 'device_id'?: string;
    public constructor(identityStoreId?: string, userId?: string, deviceId?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['user_id'] = userId;
        this['device_id'] = deviceId;
    }
    public withXSecurityToken(xSecurityToken: string): DeleteMfaDeviceForUserRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withIdentityStoreId(identityStoreId: string): DeleteMfaDeviceForUserRequest {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withUserId(userId: string): DeleteMfaDeviceForUserRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withDeviceId(deviceId: string): DeleteMfaDeviceForUserRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
}