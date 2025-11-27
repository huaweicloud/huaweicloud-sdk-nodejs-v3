
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRepoResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DeleteRepoResponse {
        this['body'] = body;
        return this;
    }
}