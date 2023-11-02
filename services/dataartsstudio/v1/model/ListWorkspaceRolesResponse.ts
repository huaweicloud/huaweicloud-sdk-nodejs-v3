import { ApigRoleVo } from './ApigRoleVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkspaceRolesResponse extends SdkResponse {
    public body?: Array<ApigRoleVo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ApigRoleVo>): ListWorkspaceRolesResponse {
        this['body'] = body;
        return this;
    }
}