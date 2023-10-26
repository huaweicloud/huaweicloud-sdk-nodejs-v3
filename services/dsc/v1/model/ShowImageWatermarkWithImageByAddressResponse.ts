
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowImageWatermarkWithImageByAddressResponse extends SdkResponse {
    private 'region_id'?: string;
    private 'image_watermark'?: string;
    public constructor() { 
        super();
    }
    public withRegionId(regionId: string): ShowImageWatermarkWithImageByAddressResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withImageWatermark(imageWatermark: string): ShowImageWatermarkWithImageByAddressResponse {
        this['image_watermark'] = imageWatermark;
        return this;
    }
    public set imageWatermark(imageWatermark: string  | undefined) {
        this['image_watermark'] = imageWatermark;
    }
    public get imageWatermark(): string | undefined {
        return this['image_watermark'];
    }
}