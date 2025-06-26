
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteInstanceSignPolicyResponse extends SdkResponse {
    public id?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): ExecuteInstanceSignPolicyResponse {
        this['id'] = id;
        return this;
    }
}