
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateArchiveRuleResponse extends SdkResponse {
    public id?: string;
    public urn?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateArchiveRuleResponse {
        this['id'] = id;
        return this;
    }
    public withUrn(urn: string): CreateArchiveRuleResponse {
        this['urn'] = urn;
        return this;
    }
}