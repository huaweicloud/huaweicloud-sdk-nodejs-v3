

export class CreateImageWatermarkRequestBody {
    public file?: any;
    private 'blind_watermark'?: string;
    private 'image_watermark'?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): CreateImageWatermarkRequestBody {
        this['file'] = file;
        return this;
    }
    public withBlindWatermark(blindWatermark: string): CreateImageWatermarkRequestBody {
        this['blind_watermark'] = blindWatermark;
        return this;
    }
    public set blindWatermark(blindWatermark: string  | undefined) {
        this['blind_watermark'] = blindWatermark;
    }
    public get blindWatermark(): string | undefined {
        return this['blind_watermark'];
    }
    public withImageWatermark(imageWatermark: any): CreateImageWatermarkRequestBody {
        this['image_watermark'] = imageWatermark;
        return this;
    }
    public set imageWatermark(imageWatermark: any  | undefined) {
        this['image_watermark'] = imageWatermark;
    }
    public get imageWatermark(): any | undefined {
        return this['image_watermark'];
    }
}