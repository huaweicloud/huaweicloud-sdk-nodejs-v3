
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBotMCategoryStatusResponse extends SdkResponse {
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): UpdateBotMCategoryStatusResponse {
        this['result'] = result;
        return this;
    }
}