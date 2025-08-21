
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryWatermarkResponse extends SdkResponse {
    public watermark?: boolean;
    private 'view_watermark'?: boolean;
    public constructor() { 
        super();
    }
    public withWatermark(watermark: boolean): ShowRepositoryWatermarkResponse {
        this['watermark'] = watermark;
        return this;
    }
    public withViewWatermark(viewWatermark: boolean): ShowRepositoryWatermarkResponse {
        this['view_watermark'] = viewWatermark;
        return this;
    }
    public set viewWatermark(viewWatermark: boolean  | undefined) {
        this['view_watermark'] = viewWatermark;
    }
    public get viewWatermark(): boolean | undefined {
        return this['view_watermark'];
    }
}