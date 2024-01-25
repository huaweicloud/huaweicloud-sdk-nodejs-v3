

export class UpdateWatermarkTemplateReq {
    public id?: string;
    public name?: string;
    public dx?: string;
    public dy?: string;
    public position?: UpdateWatermarkTemplateReqPositionEnum | string;
    public width?: string;
    public height?: string;
    private 'watermark_type'?: UpdateWatermarkTemplateReqWatermarkTypeEnum | string;
    private 'image_process'?: UpdateWatermarkTemplateReqImageProcessEnum | string;
    private 'timeline_start'?: string;
    private 'timeline_duration'?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
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
    public withPosition(position: UpdateWatermarkTemplateReqPositionEnum | string): UpdateWatermarkTemplateReq {
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
    public withWatermarkType(watermarkType: UpdateWatermarkTemplateReqWatermarkTypeEnum | string): UpdateWatermarkTemplateReq {
        this['watermark_type'] = watermarkType;
        return this;
    }
    public set watermarkType(watermarkType: UpdateWatermarkTemplateReqWatermarkTypeEnum | string  | undefined) {
        this['watermark_type'] = watermarkType;
    }
    public get watermarkType(): UpdateWatermarkTemplateReqWatermarkTypeEnum | string | undefined {
        return this['watermark_type'];
    }
    public withImageProcess(imageProcess: UpdateWatermarkTemplateReqImageProcessEnum | string): UpdateWatermarkTemplateReq {
        this['image_process'] = imageProcess;
        return this;
    }
    public set imageProcess(imageProcess: UpdateWatermarkTemplateReqImageProcessEnum | string  | undefined) {
        this['image_process'] = imageProcess;
    }
    public get imageProcess(): UpdateWatermarkTemplateReqImageProcessEnum | string | undefined {
        return this['image_process'];
    }
    public withTimelineStart(timelineStart: string): UpdateWatermarkTemplateReq {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string  | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart(): string | undefined {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): UpdateWatermarkTemplateReq {
        this['timeline_duration'] = timelineDuration;
        return this;
    }
    public set timelineDuration(timelineDuration: string  | undefined) {
        this['timeline_duration'] = timelineDuration;
    }
    public get timelineDuration(): string | undefined {
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
