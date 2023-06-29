import { BasicWatermark } from './BasicWatermark';


export class ImageWatermark {
    public dx?: string;
    public dy?: string;
    public referpos?: string;
    private 'timeline_start'?: string | undefined;
    private 'timeline_duration'?: string | undefined;
    private 'image_process'?: string | undefined;
    public width?: string;
    public height?: string;
    public base?: ImageWatermarkBaseEnum;
    public constructor() { 
    }
    public withDx(dx: string): ImageWatermark {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: string): ImageWatermark {
        this['dy'] = dy;
        return this;
    }
    public withReferpos(referpos: string): ImageWatermark {
        this['referpos'] = referpos;
        return this;
    }
    public withTimelineStart(timelineStart: string): ImageWatermark {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart() {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): ImageWatermark {
        this['timeline_duration'] = timelineDuration;
        return this;
    }
    public set timelineDuration(timelineDuration: string | undefined) {
        this['timeline_duration'] = timelineDuration;
    }
    public get timelineDuration() {
        return this['timeline_duration'];
    }
    public withImageProcess(imageProcess: string): ImageWatermark {
        this['image_process'] = imageProcess;
        return this;
    }
    public set imageProcess(imageProcess: string | undefined) {
        this['image_process'] = imageProcess;
    }
    public get imageProcess() {
        return this['image_process'];
    }
    public withWidth(width: string): ImageWatermark {
        this['width'] = width;
        return this;
    }
    public withHeight(height: string): ImageWatermark {
        this['height'] = height;
        return this;
    }
    public withBase(base: ImageWatermarkBaseEnum): ImageWatermark {
        this['base'] = base;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageWatermarkBaseEnum {
    INPUT = 'input',
    OUTPUT = 'output'
}
