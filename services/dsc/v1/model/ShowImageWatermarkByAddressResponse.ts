
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageWatermarkByAddressResponse extends SdkResponse {
    public watermark?: string;
    public constructor() { 
        super();
    }
    public withWatermark(watermark: string): ShowImageWatermarkByAddressResponse {
        this['watermark'] = watermark;
        return this;
    }
}