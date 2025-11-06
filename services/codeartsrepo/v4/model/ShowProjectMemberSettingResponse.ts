import { RoleSyncDto } from './RoleSyncDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectMemberSettingResponse extends SdkResponse {
    private 'product_id'?: string;
    private 'sync_enabled'?: boolean;
    private 'sync_all_role_enabled'?: boolean;
    private 'role_sync'?: Array<RoleSyncDto>;
    public constructor() { 
        super();
    }
    public withProductId(productId: string): ShowProjectMemberSettingResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withSyncEnabled(syncEnabled: boolean): ShowProjectMemberSettingResponse {
        this['sync_enabled'] = syncEnabled;
        return this;
    }
    public set syncEnabled(syncEnabled: boolean  | undefined) {
        this['sync_enabled'] = syncEnabled;
    }
    public get syncEnabled(): boolean | undefined {
        return this['sync_enabled'];
    }
    public withSyncAllRoleEnabled(syncAllRoleEnabled: boolean): ShowProjectMemberSettingResponse {
        this['sync_all_role_enabled'] = syncAllRoleEnabled;
        return this;
    }
    public set syncAllRoleEnabled(syncAllRoleEnabled: boolean  | undefined) {
        this['sync_all_role_enabled'] = syncAllRoleEnabled;
    }
    public get syncAllRoleEnabled(): boolean | undefined {
        return this['sync_all_role_enabled'];
    }
    public withRoleSync(roleSync: Array<RoleSyncDto>): ShowProjectMemberSettingResponse {
        this['role_sync'] = roleSync;
        return this;
    }
    public set roleSync(roleSync: Array<RoleSyncDto>  | undefined) {
        this['role_sync'] = roleSync;
    }
    public get roleSync(): Array<RoleSyncDto> | undefined {
        return this['role_sync'];
    }
}