
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunCatalogActionResponse extends SdkResponse {
    public message?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): RunCatalogActionResponse {
        this['message'] = message;
        return this;
    }
}