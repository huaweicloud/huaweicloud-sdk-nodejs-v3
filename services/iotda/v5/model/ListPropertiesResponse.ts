
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPropertiesResponse extends SdkResponse {
    public response?: object;
    public constructor() { 
        super();
    }
    public withResponse(response: object): ListPropertiesResponse {
        this['response'] = response;
        return this;
    }
}