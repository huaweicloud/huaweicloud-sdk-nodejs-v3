
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageWatermarkResponse extends SdkResponse {
    public watermark?: string;
    public constructor() { 
        super();
    }
    public withWatermark(watermark: string): ShowImageWatermarkResponse {
        this['watermark'] = watermark;
        return this;
    }
}