
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScrumIssueSeveritiesResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ShowScrumIssueSeveritiesResponse {
        this['body'] = body;
        return this;
    }
}