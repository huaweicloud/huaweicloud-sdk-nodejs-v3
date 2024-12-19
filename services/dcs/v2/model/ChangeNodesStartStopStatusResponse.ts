
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeNodesStartStopStatusResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ChangeNodesStartStopStatusResponse {
        this['body'] = body;
        return this;
    }
}