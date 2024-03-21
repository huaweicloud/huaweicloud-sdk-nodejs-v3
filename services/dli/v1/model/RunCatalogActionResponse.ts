
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunCatalogActionResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): RunCatalogActionResponse {
        this['body'] = body;
        return this;
    }
}