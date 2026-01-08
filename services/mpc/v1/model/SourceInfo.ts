import { AudioInfo } from './AudioInfo';
import { VideoInfo } from './VideoInfo';


export class SourceInfo {
    public duration?: number;
    private 'duration_ms'?: number;
    public format?: string;
    public size?: number;
    private 'manifest_name'?: string;
    public md5?: string;
    private 'video_info'?: VideoInfo;
    private 'audio_info'?: Array<AudioInfo>;
    public constructor() { 
    }
    public withDuration(duration: number): SourceInfo {
        this['duration'] = duration;
        return this;
    }
    public withDurationMs(durationMs: number): SourceInfo {
        this['duration_ms'] = durationMs;
        return this;
    }
    public set durationMs(durationMs: number  | undefined) {
        this['duration_ms'] = durationMs;
    }
    public get durationMs(): number | undefined {
        return this['duration_ms'];
    }
    public withFormat(format: string): SourceInfo {
        this['format'] = format;
        return this;
    }
    public withSize(size: number): SourceInfo {
        this['size'] = size;
        return this;
    }
    public withManifestName(manifestName: string): SourceInfo {
        this['manifest_name'] = manifestName;
        return this;
    }
    public set manifestName(manifestName: string  | undefined) {
        this['manifest_name'] = manifestName;
    }
    public get manifestName(): string | undefined {
        return this['manifest_name'];
    }
    public withMd5(md5: string): SourceInfo {
        this['md5'] = md5;
        return this;
    }
    public withVideoInfo(videoInfo: VideoInfo): SourceInfo {
        this['video_info'] = videoInfo;
        return this;
    }
    public set videoInfo(videoInfo: VideoInfo  | undefined) {
        this['video_info'] = videoInfo;
    }
    public get videoInfo(): VideoInfo | undefined {
        return this['video_info'];
    }
    public withAudioInfo(audioInfo: Array<AudioInfo>): SourceInfo {
        this['audio_info'] = audioInfo;
        return this;
    }
    public set audioInfo(audioInfo: Array<AudioInfo>  | undefined) {
        this['audio_info'] = audioInfo;
    }
    public get audioInfo(): Array<AudioInfo> | undefined {
        return this['audio_info'];
    }
}