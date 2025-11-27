
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRuleResponse extends SdkResponse {
    public uid?: string;
    public constructor() { 
        super();
    }
    public withUid(uid: string): CreateRuleResponse {
        this['uid'] = uid;
        return this;
    }
}