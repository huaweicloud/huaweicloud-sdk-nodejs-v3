
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResumeOperationalTaskResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): ResumeOperationalTaskResponse {
        this['body'] = body;
        return this;
    }
}