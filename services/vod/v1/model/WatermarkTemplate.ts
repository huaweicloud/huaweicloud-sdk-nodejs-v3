

export class WatermarkTemplate {
    public name?: string;
    public id?: string;
    public status?: number;
    public dx?: string;
    public dy?: string;
    public position?: string;
    public width?: string;
    public height?: string;
    private 'create_time'?: string;
    private 'image_url'?: string;
    public type?: string;
    private 'watermark_type'?: string;
    private 'image_process'?: string;
    private 'timeline_start'?: string;
    private 'timeline_duration'?: string;
    public constructor() { 
    }
    public withName(name: string): WatermarkTemplate {
        this['name'] = name;
        return this;
    }
    public withId(id: string): WatermarkTemplate {
        this['id'] = id;
        return this;
    }
    public withStatus(status: number): WatermarkTemplate {
        this['status'] = status;
        return this;
    }
    public withDx(dx: string): WatermarkTemplate {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: string): WatermarkTemplate {
        this['dy'] = dy;
        return this;
    }
    public withPosition(position: string): WatermarkTemplate {
        this['position'] = position;
        return this;
    }
    public withWidth(width: string): WatermarkTemplate {
        this['width'] = width;
        return this;
    }
    public withHeight(height: string): WatermarkTemplate {
        this['height'] = height;
        return this;
    }
    public withCreateTime(createTime: string): WatermarkTemplate {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withImageUrl(imageUrl: string): WatermarkTemplate {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withType(type: string): WatermarkTemplate {
        this['type'] = type;
        return this;
    }
    public withWatermarkType(watermarkType: string): WatermarkTemplate {
        this['watermark_type'] = watermarkType;
        return this;
    }
    public set watermarkType(watermarkType: string  | undefined) {
        this['watermark_type'] = watermarkType;
    }
    public get watermarkType(): string | undefined {
        return this['watermark_type'];
    }
    public withImageProcess(imageProcess: string): WatermarkTemplate {
        this['image_process'] = imageProcess;
        return this;
    }
    public set imageProcess(imageProcess: string  | undefined) {
        this['image_process'] = imageProcess;
    }
    public get imageProcess(): string | undefined {
        return this['image_process'];
    }
    public withTimelineStart(timelineStart: string): WatermarkTemplate {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string  | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart(): string | undefined {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): WatermarkTemplate {
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