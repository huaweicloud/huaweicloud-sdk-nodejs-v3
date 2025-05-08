import { ObsInfo } from './ObsInfo';


export class ObjectThumbnailTask {
    public type?: ObjectThumbnailTaskTypeEnum | string;
    public percent?: number;
    public dots?: Array<number>;
    private 'output_filename'?: string;
    public format?: ObjectThumbnailTaskFormatEnum | string;
    private 'fill_type'?: ObjectThumbnailTaskFillTypeEnum | string;
    public width?: number;
    public height?: number;
    public output?: ObsInfo;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: ObjectThumbnailTaskTypeEnum | string): ObjectThumbnailTask {
        this['type'] = type;
        return this;
    }
    public withPercent(percent: number): ObjectThumbnailTask {
        this['percent'] = percent;
        return this;
    }
    public withDots(dots: Array<number>): ObjectThumbnailTask {
        this['dots'] = dots;
        return this;
    }
    public withOutputFilename(outputFilename: string): ObjectThumbnailTask {
        this['output_filename'] = outputFilename;
        return this;
    }
    public set outputFilename(outputFilename: string  | undefined) {
        this['output_filename'] = outputFilename;
    }
    public get outputFilename(): string | undefined {
        return this['output_filename'];
    }
    public withFormat(format: ObjectThumbnailTaskFormatEnum | string): ObjectThumbnailTask {
        this['format'] = format;
        return this;
    }
    public withFillType(fillType: ObjectThumbnailTaskFillTypeEnum | string): ObjectThumbnailTask {
        this['fill_type'] = fillType;
        return this;
    }
    public set fillType(fillType: ObjectThumbnailTaskFillTypeEnum | string  | undefined) {
        this['fill_type'] = fillType;
    }
    public get fillType(): ObjectThumbnailTaskFillTypeEnum | string | undefined {
        return this['fill_type'];
    }
    public withWidth(width: number): ObjectThumbnailTask {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): ObjectThumbnailTask {
        this['height'] = height;
        return this;
    }
    public withOutput(output: ObsInfo): ObjectThumbnailTask {
        this['output'] = output;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ObjectThumbnailTaskTypeEnum {
    PERCENT = 'PERCENT',
    DOTS = 'DOTS'
}
/**
    * @export
    * @enum {string}
    */
export enum ObjectThumbnailTaskFormatEnum {
    JPG = 'jpg',
    PNG = 'png'
}
/**
    * @export
    * @enum {string}
    */
export enum ObjectThumbnailTaskFillTypeEnum {
    STRETCH = 'stretch',
    BLACK = 'black',
    WHITE = 'white',
    GAUSS = 'gauss'
}
