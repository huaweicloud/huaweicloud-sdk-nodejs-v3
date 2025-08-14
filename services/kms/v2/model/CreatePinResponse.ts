
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePinResponse extends SdkResponse {
    public pin?: string;
    public constructor() { 
        super();
    }
    public withPin(pin: string): CreatePinResponse {
        this['pin'] = pin;
        return this;
    }
}