
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTestCaseAndScriptResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UpdateTestCaseAndScriptResponse {
        this['body'] = body;
        return this;
    }
}