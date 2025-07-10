import { IdentityCenterGroup } from './IdentityCenterGroup';
import { PermissionSet } from './PermissionSet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLandingZoneIdentityCenterResponse extends SdkResponse {
    private 'identity_store_id'?: string;
    private 'user_portal_url'?: string;
    private 'permission_sets'?: Array<PermissionSet>;
    public groups?: Array<IdentityCenterGroup>;
    public constructor() { 
        super();
    }
    public withIdentityStoreId(identityStoreId: string): ShowLandingZoneIdentityCenterResponse {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withUserPortalUrl(userPortalUrl: string): ShowLandingZoneIdentityCenterResponse {
        this['user_portal_url'] = userPortalUrl;
        return this;
    }
    public set userPortalUrl(userPortalUrl: string  | undefined) {
        this['user_portal_url'] = userPortalUrl;
    }
    public get userPortalUrl(): string | undefined {
        return this['user_portal_url'];
    }
    public withPermissionSets(permissionSets: Array<PermissionSet>): ShowLandingZoneIdentityCenterResponse {
        this['permission_sets'] = permissionSets;
        return this;
    }
    public set permissionSets(permissionSets: Array<PermissionSet>  | undefined) {
        this['permission_sets'] = permissionSets;
    }
    public get permissionSets(): Array<PermissionSet> | undefined {
        return this['permission_sets'];
    }
    public withGroups(groups: Array<IdentityCenterGroup>): ShowLandingZoneIdentityCenterResponse {
        this['groups'] = groups;
        return this;
    }
}