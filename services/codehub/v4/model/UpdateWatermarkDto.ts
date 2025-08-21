

export class UpdateWatermarkDto {
    public watermark?: boolean;
    public constructor() { 
    }
    public withWatermark(watermark: boolean): UpdateWatermarkDto {
        this['watermark'] = watermark;
        return this;
    }
}