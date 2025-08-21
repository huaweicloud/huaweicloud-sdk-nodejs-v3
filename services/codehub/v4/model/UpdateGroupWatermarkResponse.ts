
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGroupWatermarkResponse extends SdkResponse {
    public watermark?: boolean;
    public constructor() { 
        super();
    }
    public withWatermark(watermark: boolean): UpdateGroupWatermarkResponse {
        this['watermark'] = watermark;
        return this;
    }
}