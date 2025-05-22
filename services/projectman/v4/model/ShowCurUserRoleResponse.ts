
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCurUserRoleResponse extends SdkResponse {
    private 'user_role'?: number;
    public constructor() { 
        super();
    }
    public withUserRole(userRole: number): ShowCurUserRoleResponse {
        this['user_role'] = userRole;
        return this;
    }
    public set userRole(userRole: number  | undefined) {
        this['user_role'] = userRole;
    }
    public get userRole(): number | undefined {
        return this['user_role'];
    }
}