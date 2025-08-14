

export class RetrieveMfaDevicesForUserDto {
    private 'identity_store_id'?: string;
    private 'user_id'?: string;
    public constructor(identityStoreId?: string, userId?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['user_id'] = userId;
    }
    public withIdentityStoreId(identityStoreId: string): RetrieveMfaDevicesForUserDto {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withUserId(userId: string): RetrieveMfaDevicesForUserDto {
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