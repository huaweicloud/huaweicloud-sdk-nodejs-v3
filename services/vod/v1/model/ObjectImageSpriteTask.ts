import { ObsInfo } from './ObsInfo';


export class ObjectImageSpriteTask {
    private 'sample_type'?: ObjectImageSpriteTaskSampleTypeEnum | string;
    private 'sample_interval'?: number;
    private 'row_count'?: number;
    private 'column_count'?: number;
    public width?: number;
    public height?: number;
    private 'resolution_adaptive'?: ObjectImageSpriteTaskResolutionAdaptiveEnum | string;
    private 'fill_type'?: ObjectImageSpriteTaskFillTypeEnum | string;
    public format?: ObjectImageSpriteTaskFormatEnum | string;
    private 'output_object_name'?: string;
    private 'webvtt_object_name'?: string;
    public output?: ObsInfo;
    public constructor(sampleType?: string, sampleInterval?: number, rowCount?: number, columnCount?: number) { 
        this['sample_type'] = sampleType;
        this['sample_interval'] = sampleInterval;
        this['row_count'] = rowCount;
        this['column_count'] = columnCount;
    }
    public withSampleType(sampleType: ObjectImageSpriteTaskSampleTypeEnum | string): ObjectImageSpriteTask {
        this['sample_type'] = sampleType;
        return this;
    }
    public set sampleType(sampleType: ObjectImageSpriteTaskSampleTypeEnum | string  | undefined) {
        this['sample_type'] = sampleType;
    }
    public get sampleType(): ObjectImageSpriteTaskSampleTypeEnum | string | undefined {
        return this['sample_type'];
    }
    public withSampleInterval(sampleInterval: number): ObjectImageSpriteTask {
        this['sample_interval'] = sampleInterval;
        return this;
    }
    public set sampleInterval(sampleInterval: number  | undefined) {
        this['sample_interval'] = sampleInterval;
    }
    public get sampleInterval(): number | undefined {
        return this['sample_interval'];
    }
    public withRowCount(rowCount: number): ObjectImageSpriteTask {
        this['row_count'] = rowCount;
        return this;
    }
    public set rowCount(rowCount: number  | undefined) {
        this['row_count'] = rowCount;
    }
    public get rowCount(): number | undefined {
        return this['row_count'];
    }
    public withColumnCount(columnCount: number): ObjectImageSpriteTask {
        this['column_count'] = columnCount;
        return this;
    }
    public set columnCount(columnCount: number  | undefined) {
        this['column_count'] = columnCount;
    }
    public get columnCount(): number | undefined {
        return this['column_count'];
    }
    public withWidth(width: number): ObjectImageSpriteTask {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): ObjectImageSpriteTask {
        this['height'] = height;
        return this;
    }
    public withResolutionAdaptive(resolutionAdaptive: ObjectImageSpriteTaskResolutionAdaptiveEnum | string): ObjectImageSpriteTask {
        this['resolution_adaptive'] = resolutionAdaptive;
        return this;
    }
    public set resolutionAdaptive(resolutionAdaptive: ObjectImageSpriteTaskResolutionAdaptiveEnum | string  | undefined) {
        this['resolution_adaptive'] = resolutionAdaptive;
    }
    public get resolutionAdaptive(): ObjectImageSpriteTaskResolutionAdaptiveEnum | string | undefined {
        return this['resolution_adaptive'];
    }
    public withFillType(fillType: ObjectImageSpriteTaskFillTypeEnum | string): ObjectImageSpriteTask {
        this['fill_type'] = fillType;
        return this;
    }
    public set fillType(fillType: ObjectImageSpriteTaskFillTypeEnum | string  | undefined) {
        this['fill_type'] = fillType;
    }
    public get fillType(): ObjectImageSpriteTaskFillTypeEnum | string | undefined {
        return this['fill_type'];
    }
    public withFormat(format: ObjectImageSpriteTaskFormatEnum | string): ObjectImageSpriteTask {
        this['format'] = format;
        return this;
    }
    public withOutputObjectName(outputObjectName: string): ObjectImageSpriteTask {
        this['output_object_name'] = outputObjectName;
        return this;
    }
    public set outputObjectName(outputObjectName: string  | undefined) {
        this['output_object_name'] = outputObjectName;
    }
    public get outputObjectName(): string | undefined {
        return this['output_object_name'];
    }
    public withWebvttObjectName(webvttObjectName: string): ObjectImageSpriteTask {
        this['webvtt_object_name'] = webvttObjectName;
        return this;
    }
    public set webvttObjectName(webvttObjectName: string  | undefined) {
        this['webvtt_object_name'] = webvttObjectName;
    }
    public get webvttObjectName(): string | undefined {
        return this['webvtt_object_name'];
    }
    public withOutput(output: ObsInfo): ObjectImageSpriteTask {
        this['output'] = output;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ObjectImageSpriteTaskSampleTypeEnum {
    PERCENT = 'PERCENT',
    TIME = 'TIME'
}
/**
    * @export
    * @enum {string}
    */
export enum ObjectImageSpriteTaskResolutionAdaptiveEnum {
    OPEN = 'open',
    CLOSE = 'close'
}
/**
    * @export
    * @enum {string}
    */
export enum ObjectImageSpriteTaskFillTypeEnum {
    STRETCH = 'stretch',
    BLACK = 'black',
    WHITE = 'white',
    GAUSS = 'gauss'
}
/**
    * @export
    * @enum {string}
    */
export enum ObjectImageSpriteTaskFormatEnum {
    JPG = 'jpg',
    PNG = 'png'
}
