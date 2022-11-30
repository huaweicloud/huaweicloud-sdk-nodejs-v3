

export class UpdateWatermarkTemplateReq {
    public id: string;
    public name?: string;
    public dx?: string;
    public dy?: string;
    public position?: UpdateWatermarkTemplateReqPositionEnum;
    public width?: string;
    public height?: string;
    private 'watermark_type'?: UpdateWatermarkTemplateReqWatermarkTypeEnum | undefined;
    private 'image_process'?: UpdateWatermarkTemplateReqImageProcessEnum | undefined;
    private 'timeline_start'?: string | undefined;
    private 'timeline_duration'?: string | undefined;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateWatermarkTemplateReq {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateWatermarkTemplateReq {
        this['name'] = name;
        return this;
    }
    public withDx(dx: string): UpdateWatermarkTemplateReq {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: string): UpdateWatermarkTemplateReq {
        this['dy'] = dy;
        return this;
    }
    public withPosition(position: UpdateWatermarkTemplateReqPositionEnum): UpdateWatermarkTemplateReq {
        this['position'] = position;
        return this;
    }
    public withWidth(width: string): UpdateWatermarkTemplateReq {
        this['width'] = width;
        return this;
    }
    public withHeight(height: string): UpdateWatermarkTemplateReq {
        this['height'] = height;
        return this;
    }
    public withWatermarkType(watermarkType: UpdateWatermarkTemplateReqWatermarkTypeEnum): UpdateWatermarkTemplateReq {
        this['watermark_type'] = watermarkType;
        return this;
    }
    public set watermarkType(watermarkType: UpdateWatermarkTemplateReqWatermarkTypeEnum | undefined) {
        this['watermark_type'] = watermarkType;
    }
    public get watermarkType() {
        return this['watermark_type'];
    }
    public withImageProcess(imageProcess: UpdateWatermarkTemplateReqImageProcessEnum): UpdateWatermarkTemplateReq {
        this['image_process'] = imageProcess;
        return this;
    }
    public set imageProcess(imageProcess: UpdateWatermarkTemplateReqImageProcessEnum | undefined) {
        this['image_process'] = imageProcess;
    }
    public get imageProcess() {
        return this['image_process'];
    }
    public withTimelineStart(timelineStart: string): UpdateWatermarkTemplateReq {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart() {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): UpdateWatermarkTemplateReq {
        this['timeline_duration'] = timelineDuration;
        return this;
    }
    public set timelineDuration(timelineDuration: string | undefined) {
        this['timeline_duration'] = timelineDuration;
    }
    public get timelineDuration() {
        return this['timeline_duration'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateWatermarkTemplateReqPositionEnum {
    TOPRIGHT = 'TOPRIGHT',
    TOPLEFT = 'TOPLEFT',
    BOTTOMRIGHT = 'BOTTOMRIGHT',
    BOTTOMLEFT = 'BOTTOMLEFT'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateWatermarkTemplateReqWatermarkTypeEnum {
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateWatermarkTemplateReqImageProcessEnum {
    ORIGINAL = 'ORIGINAL',
    TRANSPARENT = 'TRANSPARENT',
    GRAYED = 'GRAYED'
}
