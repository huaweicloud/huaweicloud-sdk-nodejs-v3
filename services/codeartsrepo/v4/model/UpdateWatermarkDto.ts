

export class UpdateWatermarkDto {
    public watermark?: boolean;
    public constructor(watermark?: boolean) { 
        this['watermark'] = watermark;
    }
    public withWatermark(watermark: boolean): UpdateWatermarkDto {
        this['watermark'] = watermark;
        return this;
    }
}