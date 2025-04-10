
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApplySecurityTableAuthorityResponse extends SdkResponse {
    public describe?: string;
    private 'permission_center_url'?: string;
    private 'workspace_id'?: string;
    private 'application_id'?: string;
    public constructor() { 
        super();
    }
    public withDescribe(describe: string): ApplySecurityTableAuthorityResponse {
        this['describe'] = describe;
        return this;
    }
    public withPermissionCenterUrl(permissionCenterUrl: string): ApplySecurityTableAuthorityResponse {
        this['permission_center_url'] = permissionCenterUrl;
        return this;
    }
    public set permissionCenterUrl(permissionCenterUrl: string  | undefined) {
        this['permission_center_url'] = permissionCenterUrl;
    }
    public get permissionCenterUrl(): string | undefined {
        return this['permission_center_url'];
    }
    public withWorkspaceId(workspaceId: string): ApplySecurityTableAuthorityResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withApplicationId(applicationId: string): ApplySecurityTableAuthorityResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
}