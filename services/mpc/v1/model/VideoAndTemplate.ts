

export class VideoAndTemplate {
    private 'template_id'?: number | undefined;
    public width?: number;
    public height?: number;
    public bitrate?: number;
    public constructor() { 
    }
    public withTemplateId(templateId: number): VideoAndTemplate {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withWidth(width: number): VideoAndTemplate {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): VideoAndTemplate {
        this['height'] = height;
        return this;
    }
    public withBitrate(bitrate: number): VideoAndTemplate {
        this['bitrate'] = bitrate;
        return this;
    }
}