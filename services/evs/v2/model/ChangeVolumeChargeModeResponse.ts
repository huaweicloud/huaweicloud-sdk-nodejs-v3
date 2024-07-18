
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeVolumeChargeModeResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ChangeVolumeChargeModeResponse {
        this['body'] = body;
        return this;
    }
}