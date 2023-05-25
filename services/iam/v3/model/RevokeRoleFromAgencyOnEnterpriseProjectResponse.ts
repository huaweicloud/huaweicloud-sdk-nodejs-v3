
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RevokeRoleFromAgencyOnEnterpriseProjectResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): RevokeRoleFromAgencyOnEnterpriseProjectResponse {
        this['body'] = body;
        return this;
    }
}