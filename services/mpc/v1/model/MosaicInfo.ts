

export class MosaicInfo {
    private 'timeline_start'?: string | undefined;
    private 'timeline_duration'?: string | undefined;
    public dx?: string;
    public dy?: string;
    public width: string;
    public height: string;
    public constructor(width?: any, height?: any) { 
        this['width'] = width;
        this['height'] = height;
    }
    public withTimelineStart(timelineStart: string): MosaicInfo {
        this['timeline_start'] = timelineStart;
        return this;
    }
    public set timelineStart(timelineStart: string | undefined) {
        this['timeline_start'] = timelineStart;
    }
    public get timelineStart() {
        return this['timeline_start'];
    }
    public withTimelineDuration(timelineDuration: string): MosaicInfo {
        this['timeline_duration'] = timelineDuration;
        return this;
    }
    public set timelineDuration(timelineDuration: string | undefined) {
        this['timeline_duration'] = timelineDuration;
    }
    public get timelineDuration() {
        return this['timeline_duration'];
    }
    public withDx(dx: string): MosaicInfo {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: string): MosaicInfo {
        this['dy'] = dy;
        return this;
    }
    public withWidth(width: string): MosaicInfo {
        this['width'] = width;
        return this;
    }
    public withHeight(height: string): MosaicInfo {
        this['height'] = height;
        return this;
    }
}