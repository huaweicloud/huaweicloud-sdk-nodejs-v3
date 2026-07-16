
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchBindPoolNodesResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): BatchBindPoolNodesResponse {
        this['body'] = body;
        return this;
    }
}