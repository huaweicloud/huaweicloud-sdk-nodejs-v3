
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEchoTestPackageUsingResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): ShowEchoTestPackageUsingResponse {
        this['body'] = body;
        return this;
    }
}