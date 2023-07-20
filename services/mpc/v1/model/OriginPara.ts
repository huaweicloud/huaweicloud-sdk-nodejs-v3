import { AudioInfo } from './AudioInfo';
import { VideoInfo } from './VideoInfo';


export class OriginPara {
    public duration?: number;
    private 'duration_ms'?: number;
    private 'file_format'?: string;
    public video?: VideoInfo;
    public audio?: AudioInfo;
    public constructor() { 
    }
    public withDuration(duration: number): OriginPara {
        this['duration'] = duration;
        return this;
    }
    public withDurationMs(durationMs: number): OriginPara {
        this['duration_ms'] = durationMs;
        return this;
    }
    public set durationMs(durationMs: number  | undefined) {
        this['duration_ms'] = durationMs;
    }
    public get durationMs(): number | undefined {
        return this['duration_ms'];
    }
    public withFileFormat(fileFormat: string): OriginPara {
        this['file_format'] = fileFormat;
        return this;
    }
    public set fileFormat(fileFormat: string  | undefined) {
        this['file_format'] = fileFormat;
    }
    public get fileFormat(): string | undefined {
        return this['file_format'];
    }
    public withVideo(video: VideoInfo): OriginPara {
        this['video'] = video;
        return this;
    }
    public withAudio(audio: AudioInfo): OriginPara {
        this['audio'] = audio;
        return this;
    }
}