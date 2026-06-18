
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSwitchConfigInfoResponse extends SdkResponse {
    public properties?: object;
    public constructor() { 
        super();
    }
    public withProperties(properties: object): ListSwitchConfigInfoResponse {
        this['properties'] = properties;
        return this;
    }
}