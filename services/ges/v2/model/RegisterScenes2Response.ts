
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RegisterScenes2Response extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): RegisterScenes2Response {
        this['result'] = result;
        return this;
    }
}