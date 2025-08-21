
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RebaseMergeRequestForOpenApiResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): RebaseMergeRequestForOpenApiResponse {
        this['body'] = body;
        return this;
    }
}