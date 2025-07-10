
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateRepositoryUserGroupResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): AssociateRepositoryUserGroupResponse {
        this['status'] = status;
        return this;
    }
}