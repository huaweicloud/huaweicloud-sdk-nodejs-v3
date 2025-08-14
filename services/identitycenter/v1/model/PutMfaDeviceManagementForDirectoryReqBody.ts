

export class PutMfaDeviceManagementForDirectoryReqBody {
    private 'identity_store_id'?: string;
    private 'user_permission'?: PutMfaDeviceManagementForDirectoryReqBodyUserPermissionEnum | string;
    public constructor(identityStoreId?: string, userPermission?: string) { 
        this['identity_store_id'] = identityStoreId;
        this['user_permission'] = userPermission;
    }
    public withIdentityStoreId(identityStoreId: string): PutMfaDeviceManagementForDirectoryReqBody {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withUserPermission(userPermission: PutMfaDeviceManagementForDirectoryReqBodyUserPermissionEnum | string): PutMfaDeviceManagementForDirectoryReqBody {
        this['user_permission'] = userPermission;
        return this;
    }
    public set userPermission(userPermission: PutMfaDeviceManagementForDirectoryReqBodyUserPermissionEnum | string  | undefined) {
        this['user_permission'] = userPermission;
    }
    public get userPermission(): PutMfaDeviceManagementForDirectoryReqBodyUserPermissionEnum | string | undefined {
        return this['user_permission'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PutMfaDeviceManagementForDirectoryReqBodyUserPermissionEnum {
    READ_ACTIONS = 'READ_ACTIONS',
    ALL_ACTIONS = 'ALL_ACTIONS'
}
