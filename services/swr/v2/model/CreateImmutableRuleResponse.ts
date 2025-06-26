
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateImmutableRuleResponse extends SdkResponse {
    public id?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): CreateImmutableRuleResponse {
        this['id'] = id;
        return this;
    }
}