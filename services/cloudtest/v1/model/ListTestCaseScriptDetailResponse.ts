
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTestCaseScriptDetailResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ListTestCaseScriptDetailResponse {
        this['body'] = body;
        return this;
    }
}