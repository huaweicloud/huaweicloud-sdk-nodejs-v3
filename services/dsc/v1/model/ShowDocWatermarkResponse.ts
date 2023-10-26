
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDocWatermarkResponse extends SdkResponse {
    public watermark?: string;
    public constructor() { 
        super();
    }
    public withWatermark(watermark: string): ShowDocWatermarkResponse {
        this['watermark'] = watermark;
        return this;
    }
}