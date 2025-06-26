
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePolicyGroupResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreatePolicyGroupResponse {
        this['id'] = id;
        return this;
    }
}