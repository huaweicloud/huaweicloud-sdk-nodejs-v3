
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceRoleResponse extends SdkResponse {
    public role?: string;
    public constructor() { 
        super();
    }
    public withRole(role: string): ShowInstanceRoleResponse {
        this['role'] = role;
        return this;
    }
}