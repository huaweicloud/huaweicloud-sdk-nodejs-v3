
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateProjectWatermarkResponse extends SdkResponse {
    public watermark?: boolean;
    public constructor() { 
        super();
    }
    public withWatermark(watermark: boolean): UpdateProjectWatermarkResponse {
        this['watermark'] = watermark;
        return this;
    }
}