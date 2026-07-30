
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiPolicyDetailResponse extends SdkResponse {
    public content?: string;
    public constructor() { 
        super();
    }
    public withContent(content: string): ListAiPolicyDetailResponse {
        this['content'] = content;
        return this;
    }
}