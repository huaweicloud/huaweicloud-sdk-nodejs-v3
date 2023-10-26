

export class ShowImageWatermarkWithImageByAddressRequestBody {
    private 'region_id'?: string;
    private 'src_file'?: string;
    private 'image_watermark'?: string;
    public constructor(regionId?: string, srcFile?: string, imageWatermark?: string) { 
        this['region_id'] = regionId;
        this['src_file'] = srcFile;
        this['image_watermark'] = imageWatermark;
    }
    public withRegionId(regionId: string): ShowImageWatermarkWithImageByAddressRequestBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSrcFile(srcFile: string): ShowImageWatermarkWithImageByAddressRequestBody {
        this['src_file'] = srcFile;
        return this;
    }
    public set srcFile(srcFile: string  | undefined) {
        this['src_file'] = srcFile;
    }
    public get srcFile(): string | undefined {
        return this['src_file'];
    }
    public withImageWatermark(imageWatermark: string): ShowImageWatermarkWithImageByAddressRequestBody {
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