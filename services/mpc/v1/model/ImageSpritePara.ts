

export class ImageSpritePara {
    private 'sample_type'?: ImageSpriteParaSampleTypeEnum | string;
    private 'sample_interval'?: number;
    private 'row_count'?: number;
    private 'column_count'?: number;
    public width?: number;
    public height?: number;
    private 'resolution_adaptive'?: ImageSpriteParaResolutionAdaptiveEnum | string;
    private 'fill_type'?: ImageSpriteParaFillTypeEnum | string;
    public format?: ImageSpriteParaFormatEnum | string;
    public constructor(sampleType?: string, sampleInterval?: number, rowCount?: number, columnCount?: number) { 
        this['sample_type'] = sampleType;
        this['sample_interval'] = sampleInterval;
        this['row_count'] = rowCount;
        this['column_count'] = columnCount;
    }
    public withSampleType(sampleType: ImageSpriteParaSampleTypeEnum | string): ImageSpritePara {
        this['sample_type'] = sampleType;
        return this;
    }
    public set sampleType(sampleType: ImageSpriteParaSampleTypeEnum | string  | undefined) {
        this['sample_type'] = sampleType;
    }
    public get sampleType(): ImageSpriteParaSampleTypeEnum | string | undefined {
        return this['sample_type'];
    }
    public withSampleInterval(sampleInterval: number): ImageSpritePara {
        this['sample_interval'] = sampleInterval;
        return this;
    }
    public set sampleInterval(sampleInterval: number  | undefined) {
        this['sample_interval'] = sampleInterval;
    }
    public get sampleInterval(): number | undefined {
        return this['sample_interval'];
    }
    public withRowCount(rowCount: number): ImageSpritePara {
        this['row_count'] = rowCount;
        return this;
    }
    public set rowCount(rowCount: number  | undefined) {
        this['row_count'] = rowCount;
    }
    public get rowCount(): number | undefined {
        return this['row_count'];
    }
    public withColumnCount(columnCount: number): ImageSpritePara {
        this['column_count'] = columnCount;
        return this;
    }
    public set columnCount(columnCount: number  | undefined) {
        this['column_count'] = columnCount;
    }
    public get columnCount(): number | undefined {
        return this['column_count'];
    }
    public withWidth(width: number): ImageSpritePara {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): ImageSpritePara {
        this['height'] = height;
        return this;
    }
    public withResolutionAdaptive(resolutionAdaptive: ImageSpriteParaResolutionAdaptiveEnum | string): ImageSpritePara {
        this['resolution_adaptive'] = resolutionAdaptive;
        return this;
    }
    public set resolutionAdaptive(resolutionAdaptive: ImageSpriteParaResolutionAdaptiveEnum | string  | undefined) {
        this['resolution_adaptive'] = resolutionAdaptive;
    }
    public get resolutionAdaptive(): ImageSpriteParaResolutionAdaptiveEnum | string | undefined {
        return this['resolution_adaptive'];
    }
    public withFillType(fillType: ImageSpriteParaFillTypeEnum | string): ImageSpritePara {
        this['fill_type'] = fillType;
        return this;
    }
    public set fillType(fillType: ImageSpriteParaFillTypeEnum | string  | undefined) {
        this['fill_type'] = fillType;
    }
    public get fillType(): ImageSpriteParaFillTypeEnum | string | undefined {
        return this['fill_type'];
    }
    public withFormat(format: ImageSpriteParaFormatEnum | string): ImageSpritePara {
        this['format'] = format;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageSpriteParaSampleTypeEnum {
    PERCENT = 'PERCENT',
    TIME = 'TIME'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageSpriteParaResolutionAdaptiveEnum {
    OPEN = 'open',
    CLOSE = 'close'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageSpriteParaFillTypeEnum {
    STRETCH = 'stretch',
    BLACK = 'black',
    WHITE = 'white'
}
/**
    * @export
    * @enum {string}
    */
export enum ImageSpriteParaFormatEnum {
    JPG = 'jpg',
    PNG = 'png'
}
