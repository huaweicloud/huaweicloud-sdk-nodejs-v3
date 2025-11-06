
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRepositoryWatermarkResponse extends SdkResponse {
    public watermark?: boolean;
    public constructor() { 
        super();
    }
    public withWatermark(watermark: boolean): UpdateRepositoryWatermarkResponse {
        this['watermark'] = watermark;
        return this;
    }
}