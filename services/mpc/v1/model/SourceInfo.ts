import { AudioInfo } from './AudioInfo';
import { VideoInfo } from './VideoInfo';


export class SourceInfo {
    public duration?: number;
    private 'duration_ms'?: number | undefined;
    public format?: string;
    public size?: number;
    private 'video_info'?: VideoInfo | undefined;
    private 'audio_info'?: Array<AudioInfo> | undefined;
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
    public set durationMs(durationMs: number | undefined) {
        this['duration_ms'] = durationMs;
    }
    public get durationMs() {
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
    public withVideoInfo(videoInfo: VideoInfo): SourceInfo {
        this['video_info'] = videoInfo;
        return this;
    }
    public set videoInfo(videoInfo: VideoInfo | undefined) {
        this['video_info'] = videoInfo;
    }
    public get videoInfo() {
        return this['video_info'];
    }
    public withAudioInfo(audioInfo: Array<AudioInfo>): SourceInfo {
        this['audio_info'] = audioInfo;
        return this;
    }
    public set audioInfo(audioInfo: Array<AudioInfo> | undefined) {
        this['audio_info'] = audioInfo;
    }
    public get audioInfo() {
        return this['audio_info'];
    }
}