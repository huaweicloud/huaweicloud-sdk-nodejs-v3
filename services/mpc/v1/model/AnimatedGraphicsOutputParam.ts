

export class AnimatedGraphicsOutputParam {
    public format?: AnimatedGraphicsOutputParamFormatEnum | string;
    public width?: number;
    public height?: number;
    public start?: number;
    public end?: number;
    private 'frame_rate'?: number;
    public constructor(width?: number, height?: number, start?: number, end?: number) { 
        this['width'] = width;
        this['height'] = height;
        this['start'] = start;
        this['end'] = end;
    }
    public withFormat(format: AnimatedGraphicsOutputParamFormatEnum | string): AnimatedGraphicsOutputParam {
        this['format'] = format;
        return this;
    }
    public withWidth(width: number): AnimatedGraphicsOutputParam {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): AnimatedGraphicsOutputParam {
        this['height'] = height;
        return this;
    }
    public withStart(start: number): AnimatedGraphicsOutputParam {
        this['start'] = start;
        return this;
    }
    public withEnd(end: number): AnimatedGraphicsOutputParam {
        this['end'] = end;
        return this;
    }
    public withFrameRate(frameRate: number): AnimatedGraphicsOutputParam {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: number  | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate(): number | undefined {
        return this['frame_rate'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AnimatedGraphicsOutputParamFormatEnum {
    GIF = 'gif'
}
