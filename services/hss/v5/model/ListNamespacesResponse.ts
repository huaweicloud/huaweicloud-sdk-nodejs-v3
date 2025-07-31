
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNamespacesResponse extends SdkResponse {
    public body?: Array<string>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<string>): ListNamespacesResponse {
        this['body'] = body;
        return this;
    }
}