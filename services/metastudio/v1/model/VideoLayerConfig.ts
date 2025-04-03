

export class VideoLayerConfig {
    private 'video_url'?: string;
    private 'video_cover_url'?: string;
    private 'loop_count'?: number;
    private 'video_sound'?: number;
    private 'is_play_the_entire_video'?: boolean;
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
    public withLoopCount(loopCount: number): VideoLayerConfig {
        this['loop_count'] = loopCount;
        return this;
    }
    public set loopCount(loopCount: number  | undefined) {
        this['loop_count'] = loopCount;
    }
    public get loopCount(): number | undefined {
        return this['loop_count'];
    }
    public withVideoSound(videoSound: number): VideoLayerConfig {
        this['video_sound'] = videoSound;
        return this;
    }
    public set videoSound(videoSound: number  | undefined) {
        this['video_sound'] = videoSound;
    }
    public get videoSound(): number | undefined {
        return this['video_sound'];
    }
    public withIsPlayTheEntireVideo(isPlayTheEntireVideo: boolean): VideoLayerConfig {
        this['is_play_the_entire_video'] = isPlayTheEntireVideo;
        return this;
    }
    public set isPlayTheEntireVideo(isPlayTheEntireVideo: boolean  | undefined) {
        this['is_play_the_entire_video'] = isPlayTheEntireVideo;
    }
    public get isPlayTheEntireVideo(): boolean | undefined {
        return this['is_play_the_entire_video'];
    }
}