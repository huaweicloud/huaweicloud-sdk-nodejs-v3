
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetMfaDeviceManagementForIdentityStoreResponse extends SdkResponse {
    private 'identity_store_id'?: string;
    private 'user_permission'?: GetMfaDeviceManagementForIdentityStoreResponseUserPermissionEnum | string;
    public constructor() { 
        super();
    }
    public withIdentityStoreId(identityStoreId: string): GetMfaDeviceManagementForIdentityStoreResponse {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withUserPermission(userPermission: GetMfaDeviceManagementForIdentityStoreResponseUserPermissionEnum | string): GetMfaDeviceManagementForIdentityStoreResponse {
        this['user_permission'] = userPermission;
        return this;
    }
    public set userPermission(userPermission: GetMfaDeviceManagementForIdentityStoreResponseUserPermissionEnum | string  | undefined) {
        this['user_permission'] = userPermission;
    }
    public get userPermission(): GetMfaDeviceManagementForIdentityStoreResponseUserPermissionEnum | string | undefined {
        return this['user_permission'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetMfaDeviceManagementForIdentityStoreResponseUserPermissionEnum {
    READ_ACTIONS = 'READ_ACTIONS',
    ALL_ACTIONS = 'ALL_ACTIONS'
}
