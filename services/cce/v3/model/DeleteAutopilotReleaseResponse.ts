
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAutopilotReleaseResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DeleteAutopilotReleaseResponse {
        this['body'] = body;
        return this;
    }
}