import { RoleResult } from './RoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowPermissionResponse extends SdkResponse {
    public role?: RoleResult;
    public constructor() { 
        super();
    }
    public withRole(role: RoleResult): KeystoneShowPermissionResponse {
        this['role'] = role;
        return this;
    }
}