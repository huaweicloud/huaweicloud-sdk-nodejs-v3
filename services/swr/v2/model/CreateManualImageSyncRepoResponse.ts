
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateManualImageSyncRepoResponse extends SdkResponse {
    public body?: Array<string>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<string>): CreateManualImageSyncRepoResponse {
        this['body'] = body;
        return this;
    }
}