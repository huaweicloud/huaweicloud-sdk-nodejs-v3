
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateRoleToAgencyOnEnterpriseProjectResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): AssociateRoleToAgencyOnEnterpriseProjectResponse {
        this['body'] = body;
        return this;
    }
}