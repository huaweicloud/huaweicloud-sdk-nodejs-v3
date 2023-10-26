
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateImageWatermarkByAddressResponse extends SdkResponse {
    private 'region_id'?: string;
    private 'watermarked_file'?: string;
    public constructor() { 
        super();
    }
    public withRegionId(regionId: string): CreateImageWatermarkByAddressResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withWatermarkedFile(watermarkedFile: string): CreateImageWatermarkByAddressResponse {
        this['watermarked_file'] = watermarkedFile;
        return this;
    }
    public set watermarkedFile(watermarkedFile: string  | undefined) {
        this['watermarked_file'] = watermarkedFile;
    }
    public get watermarkedFile(): string | undefined {
        return this['watermarked_file'];
    }
}