
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommitAssociatedRefsResponse extends SdkResponse {
    public body?: Array<string>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<string>): ListCommitAssociatedRefsResponse {
        this['body'] = body;
        return this;
    }
}