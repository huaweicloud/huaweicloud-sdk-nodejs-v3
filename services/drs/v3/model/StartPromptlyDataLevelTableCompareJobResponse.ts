
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartPromptlyDataLevelTableCompareJobResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): StartPromptlyDataLevelTableCompareJobResponse {
        this['body'] = body;
        return this;
    }
}