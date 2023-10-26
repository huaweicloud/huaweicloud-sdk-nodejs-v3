
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDocWatermarkByAddressResponse extends SdkResponse {
    public watermark?: string;
    public constructor() { 
        super();
    }
    public withWatermark(watermark: string): ShowDocWatermarkByAddressResponse {
        this['watermark'] = watermark;
        return this;
    }
}