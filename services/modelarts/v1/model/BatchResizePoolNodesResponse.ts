
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchResizePoolNodesResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): BatchResizePoolNodesResponse {
        this['body'] = body;
        return this;
    }
}