
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteInstanceReplicationPolicyResponse extends SdkResponse {
    public id?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): ExecuteInstanceReplicationPolicyResponse {
        this['id'] = id;
        return this;
    }
}