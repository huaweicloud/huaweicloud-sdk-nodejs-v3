
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeDbMajorVersionResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UpgradeDbMajorVersionResponse {
        this['body'] = body;
        return this;
    }
}