

export class CreateWatermarkTemplateReq {
    public name: string;
    private 'watermark_type'?: CreateWatermarkTemplateReqWatermarkTypeEnum | undefined;
    private 'image_process'?: CreateWatermarkTemplateReqImageProcessEnum | undefined;
    public dx?: string;
    public dy?: string;
    public position?: CreateWatermarkTemplateReqPositionEnum;
    public width?: string;
    public height?: string;
    private 'timeline_start'?: string | undefined;
    private 'timeline_duration'?: string | undefined;
    public type: string;
    public md5?: string;
    public constructor(name?: any, type?: any) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): CreateWatermarkTemplateReq {
        this['name'] = name;
        return this;
    }
    public withWatermarkType(watermarkType: CreateWatermarkTemplateReqWatermarkTypeEnum): CreateWatermarkTemplateReq {
        this['watermark_type'] = watermarkType;
        return this;
    }
    public set watermarkType(watermarkType: CreateWatermarkTemplateReqWatermarkTypeEnum | undefined) {
        this['watermark_type'] = watermarkType;
    }
    public get watermarkType() {
        return this['watermark_type'];
    }
    public withImageProcess(imageProcess: CreateWatermarkTemplateReqImageProcessEnum): CreateWatermarkTemplateReq {
        this['image_process'] = imageProcess;
        return this;
    }
    public set imageProcess(imageProcess: CreateWatermarkTemplateReqImageProcessEnum | undefined) {
        this['image_process'] = imageProcess;
    }
    public get imageProcess() {
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
    public withPosition(position: CreateWatermarkTemplateReqPositionEnum): CreateWatermarkTemplateReq {
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
    public set timelineStart(timelineStart: string | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart() {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): CreateWatermarkTemplateReq {
        this['timeline_duration'] = timelineDuration;
        return this;
    }
    public set timelineDuration(timelineDuration: string | undefined) {
        this['timeline_duration'] = timelineDuration;
    }
    public get timelineDuration() {
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
