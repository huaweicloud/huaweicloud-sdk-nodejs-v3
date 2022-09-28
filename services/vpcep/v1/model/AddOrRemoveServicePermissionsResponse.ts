
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddOrRemoveServicePermissionsResponse extends SdkResponse {
    public permissions?: Array<string>;
    public constructor() { 
        super();
    }
    public withPermissions(permissions: Array<string>): AddOrRemoveServicePermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
}