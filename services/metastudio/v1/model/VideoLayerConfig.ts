

export class VideoLayerConfig {
    private 'video_url'?: string;
    private 'video_cover_url'?: string;
    public constructor() { 
    }
    public withVideoUrl(videoUrl: string): VideoLayerConfig {
        this['video_url'] = videoUrl;
        return this;
    }
    public set videoUrl(videoUrl: string  | undefined) {
        this['video_url'] = videoUrl;
    }
    public get videoUrl(): string | undefined {
        return this['video_url'];
    }
    public withVideoCoverUrl(videoCoverUrl: string): VideoLayerConfig {
        this['video_cover_url'] = videoCoverUrl;
        return this;
    }
    public set videoCoverUrl(videoCoverUrl: string  | undefined) {
        this['video_cover_url'] = videoCoverUrl;
    }
    public get videoCoverUrl(): string | undefined {
        return this['video_cover_url'];
    }
}