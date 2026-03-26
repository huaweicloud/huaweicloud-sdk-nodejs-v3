
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResizeClusterWithExistedNodesResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): ResizeClusterWithExistedNodesResponse {
        this['body'] = body;
        return this;
    }
}