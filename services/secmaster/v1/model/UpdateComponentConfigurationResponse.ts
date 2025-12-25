
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateComponentConfigurationResponse extends SdkResponse {
    public message?: string;
    public result?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): UpdateComponentConfigurationResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: string): UpdateComponentConfigurationResponse {
        this['result'] = result;
        return this;
    }
}