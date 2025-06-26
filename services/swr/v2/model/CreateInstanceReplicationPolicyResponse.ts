
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceReplicationPolicyResponse extends SdkResponse {
    public id?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): CreateInstanceReplicationPolicyResponse {
        this['id'] = id;
        return this;
    }
}