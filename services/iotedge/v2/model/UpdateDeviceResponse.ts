
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDeviceResponse extends SdkResponse {
    public config?: object;
    public constructor() { 
        super();
    }
    public withConfig(config: object): UpdateDeviceResponse {
        this['config'] = config;
        return this;
    }
}