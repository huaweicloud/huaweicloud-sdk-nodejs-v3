
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteInstanceRetentionPolicyResponse extends SdkResponse {
    public id?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): ExecuteInstanceRetentionPolicyResponse {
        this['id'] = id;
        return this;
    }
}