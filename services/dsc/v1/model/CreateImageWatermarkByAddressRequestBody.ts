

export class CreateImageWatermarkByAddressRequestBody {
    private 'region_id'?: string;
    private 'src_file'?: string;
    private 'blind_watermark'?: string;
    private 'image_watermark'?: string;
    private 'dst_file'?: string;
    public constructor(regionId?: string, srcFile?: string) { 
        this['region_id'] = regionId;
        this['src_file'] = srcFile;
    }
    public withRegionId(regionId: string): CreateImageWatermarkByAddressRequestBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSrcFile(srcFile: string): CreateImageWatermarkByAddressRequestBody {
        this['src_file'] = srcFile;
        return this;
    }
    public set srcFile(srcFile: string  | undefined) {
        this['src_file'] = srcFile;
    }
    public get srcFile(): string | undefined {
        return this['src_file'];
    }
    public withBlindWatermark(blindWatermark: string): CreateImageWatermarkByAddressRequestBody {
        this['blind_watermark'] = blindWatermark;
        return this;
    }
    public set blindWatermark(blindWatermark: string  | undefined) {
        this['blind_watermark'] = blindWatermark;
    }
    public get blindWatermark(): string | undefined {
        return this['blind_watermark'];
    }
    public withImageWatermark(imageWatermark: string): CreateImageWatermarkByAddressRequestBody {
        this['image_watermark'] = imageWatermark;
        return this;
    }
    public set imageWatermark(imageWatermark: string  | undefined) {
        this['image_watermark'] = imageWatermark;
    }
    public get imageWatermark(): string | undefined {
        return this['image_watermark'];
    }
    public withDstFile(dstFile: string): CreateImageWatermarkByAddressRequestBody {
        this['dst_file'] = dstFile;
        return this;
    }
    public set dstFile(dstFile: string  | undefined) {
        this['dst_file'] = dstFile;
    }
    public get dstFile(): string | undefined {
        return this['dst_file'];
    }
}