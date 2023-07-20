

export class ThumbnailPara {
    public type?: ThumbnailParaTypeEnum | string;
    public time?: number;
    private 'start_time'?: number;
    public duration?: number;
    public dots?: Array<number>;
    private 'output_filename'?: string;
    public format?: number;
    public width?: number;
    public height?: number;
    private 'max_length'?: number;
    public constructor() { 
    }
    public withType(type: ThumbnailParaTypeEnum | string): ThumbnailPara {
        this['type'] = type;
        return this;
    }
    public withTime(time: number): ThumbnailPara {
        this['time'] = time;
        return this;
    }
    public withStartTime(startTime: number): ThumbnailPara {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withDuration(duration: number): ThumbnailPara {
        this['duration'] = duration;
        return this;
    }
    public withDots(dots: Array<number>): ThumbnailPara {
        this['dots'] = dots;
        return this;
    }
    public withOutputFilename(outputFilename: string): ThumbnailPara {
        this['output_filename'] = outputFilename;
        return this;
    }
    public set outputFilename(outputFilename: string  | undefined) {
        this['output_filename'] = outputFilename;
    }
    public get outputFilename(): string | undefined {
        return this['output_filename'];
    }
    public withFormat(format: number): ThumbnailPara {
        this['format'] = format;
        return this;
    }
    public withWidth(width: number): ThumbnailPara {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): ThumbnailPara {
        this['height'] = height;
        return this;
    }
    public withMaxLength(maxLength: number): ThumbnailPara {
        this['max_length'] = maxLength;
        return this;
    }
    public set maxLength(maxLength: number  | undefined) {
        this['max_length'] = maxLength;
    }
    public get maxLength(): number | undefined {
        return this['max_length'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ThumbnailParaTypeEnum {
    PERCENT = 'PERCENT',
    TIME = 'TIME',
    DOTS = 'DOTS'
}
