

export class VideoAndTemplate {
    private 'template_id'?: number;
    public width?: number;
    public height?: number;
    public bitrate?: number;
    private 'stream_name'?: string;
    public constructor() { 
    }
    public withTemplateId(templateId: number): VideoAndTemplate {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
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
    public withStreamName(streamName: string): VideoAndTemplate {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
}