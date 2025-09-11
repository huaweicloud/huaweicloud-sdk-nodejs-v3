
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateScrumPlanToProjectResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): CreateScrumPlanToProjectResponse {
        this['body'] = body;
        return this;
    }
}