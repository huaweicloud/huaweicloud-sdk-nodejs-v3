

export class CreateWatermarkTemplateReq {
    public name?: string;
    private 'watermark_type'?: CreateWatermarkTemplateReqWatermarkTypeEnum | string;
    private 'image_process'?: CreateWatermarkTemplateReqImageProcessEnum | string;
    public dx?: string;
    public dy?: string;
    public position?: CreateWatermarkTemplateReqPositionEnum | string;
    public width?: string;
    public height?: string;
    private 'timeline_start'?: string;
    private 'timeline_duration'?: string;
    public type?: string;
    public md5?: string;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): CreateWatermarkTemplateReq {
        this['name'] = name;
        return this;
    }
    public withWatermarkType(watermarkType: CreateWatermarkTemplateReqWatermarkTypeEnum | string): CreateWatermarkTemplateReq {
        this['watermark_type'] = watermarkType;
        return this;
    }
    public set watermarkType(watermarkType: CreateWatermarkTemplateReqWatermarkTypeEnum | string  | undefined) {
        this['watermark_type'] = watermarkType;
    }
    public get watermarkType(): CreateWatermarkTemplateReqWatermarkTypeEnum | string | undefined {
        return this['watermark_type'];
    }
    public withImageProcess(imageProcess: CreateWatermarkTemplateReqImageProcessEnum | string): CreateWatermarkTemplateReq {
        this['image_process'] = imageProcess;
        return this;
    }
    public set imageProcess(imageProcess: CreateWatermarkTemplateReqImageProcessEnum | string  | undefined) {
        this['image_process'] = imageProcess;
    }
    public get imageProcess(): CreateWatermarkTemplateReqImageProcessEnum | string | undefined {
        return this['image_process'];
    }
    public withDx(dx: string): CreateWatermarkTemplateReq {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: string): CreateWatermarkTemplateReq {
        this['dy'] = dy;
        return this;
    }
    public withPosition(position: CreateWatermarkTemplateReqPositionEnum | string): CreateWatermarkTemplateReq {
        this['position'] = position;
        return this;
    }
    public withWidth(width: string): CreateWatermarkTemplateReq {
        this['width'] = width;
        return this;
    }
    public withHeight(height: string): CreateWatermarkTemplateReq {
        this['height'] = height;
        return this;
    }
    public withTimelineStart(timelineStart: string): CreateWatermarkTemplateReq {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string  | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart(): string | undefined {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): CreateWatermarkTemplateReq {
        this['timeline_duration'] = timelineDuration;
        return this;
    }
    public set timelineDuration(timelineDuration: string  | undefined) {
        this['timeline_duration'] = timelineDuration;
    }
    public get timelineDuration(): string | undefined {
        return this['timeline_duration'];
    }
    public withType(type: string): CreateWatermarkTemplateReq {
        this['type'] = type;
        return this;
    }
    public withMd5(md5: string): CreateWatermarkTemplateReq {
        this['md5'] = md5;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateWatermarkTemplateReqWatermarkTypeEnum {
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateWatermarkTemplateReqImageProcessEnum {
    ORIGINAL = 'ORIGINAL',
    TRANSPARENT = 'TRANSPARENT',
    GRAYED = 'GRAYED'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateWatermarkTemplateReqPositionEnum {
    TOPRIGHT = 'TOPRIGHT',
    TOPLEFT = 'TOPLEFT',
    BOTTOMRIGHT = 'BOTTOMRIGHT',
    BOTTOMLEFT = 'BOTTOMLEFT'
}
