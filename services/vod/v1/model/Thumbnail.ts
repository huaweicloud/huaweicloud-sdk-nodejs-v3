

export class Thumbnail {
    public type?: ThumbnailTypeEnum | string;
    public time?: number;
    public dots?: Array<number>;
    private 'cover_position'?: number;
    public format?: number;
    private 'aspect_ratio'?: number;
    private 'max_length'?: number;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: ThumbnailTypeEnum | string): Thumbnail {
        this['type'] = type;
        return this;
    }
    public withTime(time: number): Thumbnail {
        this['time'] = time;
        return this;
    }
    public withDots(dots: Array<number>): Thumbnail {
        this['dots'] = dots;
        return this;
    }
    public withCoverPosition(coverPosition: number): Thumbnail {
        this['cover_position'] = coverPosition;
        return this;
    }
    public set coverPosition(coverPosition: number  | undefined) {
        this['cover_position'] = coverPosition;
    }
    public get coverPosition(): number | undefined {
        return this['cover_position'];
    }
    public withFormat(format: number): Thumbnail {
        this['format'] = format;
        return this;
    }
    public withAspectRatio(aspectRatio: number): Thumbnail {
        this['aspect_ratio'] = aspectRatio;
        return this;
    }
    public set aspectRatio(aspectRatio: number  | undefined) {
        this['aspect_ratio'] = aspectRatio;
    }
    public get aspectRatio(): number | undefined {
        return this['aspect_ratio'];
    }
    public withMaxLength(maxLength: number): Thumbnail {
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
export enum ThumbnailTypeEnum {
    TIME = 'time',
    DOTS = 'dots'
}
