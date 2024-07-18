
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAutopilotAddonInstanceResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DeleteAutopilotAddonInstanceResponse {
        this['body'] = body;
        return this;
    }
}