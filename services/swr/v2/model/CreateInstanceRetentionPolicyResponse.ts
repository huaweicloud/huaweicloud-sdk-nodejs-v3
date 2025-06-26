
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceRetentionPolicyResponse extends SdkResponse {
    public id?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): CreateInstanceRetentionPolicyResponse {
        this['id'] = id;
        return this;
    }
}