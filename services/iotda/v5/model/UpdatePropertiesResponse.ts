
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePropertiesResponse extends SdkResponse {
    public response?: object;
    public constructor() { 
        super();
    }
    public withResponse(response: object): UpdatePropertiesResponse {
        this['response'] = response;
        return this;
    }
}