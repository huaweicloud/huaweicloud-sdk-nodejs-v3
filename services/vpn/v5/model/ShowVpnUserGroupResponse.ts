import { VpnUserGroup } from './VpnUserGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVpnUserGroupResponse extends SdkResponse {
    private 'user_group'?: VpnUserGroup;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withUserGroup(userGroup: VpnUserGroup): ShowVpnUserGroupResponse {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: VpnUserGroup  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): VpnUserGroup | undefined {
        return this['user_group'];
    }
    public withRequestId(requestId: string): ShowVpnUserGroupResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): ShowVpnUserGroupResponse {
        this['header-response-token'] = headerResponseToken;
        return this;
    }
    public set headerResponseToken(headerResponseToken: string  | undefined) {
        this['header-response-token'] = headerResponseToken;
    }
    public get headerResponseToken(): string | undefined {
        return this['header-response-token'];
    }
}