import { AudioInfo } from './AudioInfo';
import { VideoInfo } from './VideoInfo';


export class MetaData {
    public size?: number;
    private 'duration_ms'?: number;
    public duration?: number;
    public format?: string;
    public bitrate?: number;
    public video?: Array<VideoInfo>;
    public audio?: Array<AudioInfo>;
    public constructor() { 
    }
    public withSize(size: number): MetaData {
        this['size'] = size;
        return this;
    }
    public withDurationMs(durationMs: number): MetaData {
        this['duration_ms'] = durationMs;
        return this;
    }
    public set durationMs(durationMs: number  | undefined) {
        this['duration_ms'] = durationMs;
    }
    public get durationMs(): number | undefined {
        return this['duration_ms'];
    }
    public withDuration(duration: number): MetaData {
        this['duration'] = duration;
        return this;
    }
    public withFormat(format: string): MetaData {
        this['format'] = format;
        return this;
    }
    public withBitrate(bitrate: number): MetaData {
        this['bitrate'] = bitrate;
        return this;
    }
    public withVideo(video: Array<VideoInfo>): MetaData {
        this['video'] = video;
        return this;
    }
    public withAudio(audio: Array<AudioInfo>): MetaData {
        this['audio'] = audio;
        return this;
    }
}