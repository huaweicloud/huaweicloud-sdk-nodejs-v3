import { AudioInfo } from './AudioInfo';
import { VideoInfo } from './VideoInfo';
import { XCodeError } from './XCodeError';


export class OutputVideoPara {
    private 'template_id'?: number;
    public size?: number;
    public pack?: string;
    public video?: VideoInfo;
    public audio?: AudioInfo;
    private 'file_name'?: string;
    private 'conver_duration'?: number;
    public error?: XCodeError;
    public constructor() { 
    }
    public withTemplateId(templateId: number): OutputVideoPara {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withSize(size: number): OutputVideoPara {
        this['size'] = size;
        return this;
    }
    public withPack(pack: string): OutputVideoPara {
        this['pack'] = pack;
        return this;
    }
    public withVideo(video: VideoInfo): OutputVideoPara {
        this['video'] = video;
        return this;
    }
    public withAudio(audio: AudioInfo): OutputVideoPara {
        this['audio'] = audio;
        return this;
    }
    public withFileName(fileName: string): OutputVideoPara {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withConverDuration(converDuration: number): OutputVideoPara {
        this['conver_duration'] = converDuration;
        return this;
    }
    public set converDuration(converDuration: number  | undefined) {
        this['conver_duration'] = converDuration;
    }
    public get converDuration(): number | undefined {
        return this['conver_duration'];
    }
    public withError(error: XCodeError): OutputVideoPara {
        this['error'] = error;
        return this;
    }
}