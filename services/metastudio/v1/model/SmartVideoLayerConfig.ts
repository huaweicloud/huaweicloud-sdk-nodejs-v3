

export class SmartVideoLayerConfig {
    private 'video_url'?: string;
    private 'video_cover_url'?: string;
    private 'display_duration'?: number;
    public constructor(videoUrl?: string) { 
        this['video_url'] = videoUrl;
    }
    public withVideoUrl(videoUrl: string): SmartVideoLayerConfig {
        this['video_url'] = videoUrl;
        return this;
    }
    public set videoUrl(videoUrl: string  | undefined) {
        this['video_url'] = videoUrl;
    }
    public get videoUrl(): string | undefined {
        return this['video_url'];
    }
    public withVideoCoverUrl(videoCoverUrl: string): SmartVideoLayerConfig {
        this['video_cover_url'] = videoCoverUrl;
        return this;
    }
    public set videoCoverUrl(videoCoverUrl: string  | undefined) {
        this['video_cover_url'] = videoCoverUrl;
    }
    public get videoCoverUrl(): string | undefined {
        return this['video_cover_url'];
    }
    public withDisplayDuration(displayDuration: number): SmartVideoLayerConfig {
        this['display_duration'] = displayDuration;
        return this;
    }
    public set displayDuration(displayDuration: number  | undefined) {
        this['display_duration'] = displayDuration;
    }
    public get displayDuration(): number | undefined {
        return this['display_duration'];
    }
}