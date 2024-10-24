import { SubtitleFileInfo } from './SubtitleFileInfo';


export class SubtitleFiles {
    private 'text_subtitle_file'?: SubtitleFileInfo;
    private 'audio_subtitle_file'?: SubtitleFileInfo;
    public constructor() { 
    }
    public withTextSubtitleFile(textSubtitleFile: SubtitleFileInfo): SubtitleFiles {
        this['text_subtitle_file'] = textSubtitleFile;
        return this;
    }
    public set textSubtitleFile(textSubtitleFile: SubtitleFileInfo  | undefined) {
        this['text_subtitle_file'] = textSubtitleFile;
    }
    public get textSubtitleFile(): SubtitleFileInfo | undefined {
        return this['text_subtitle_file'];
    }
    public withAudioSubtitleFile(audioSubtitleFile: SubtitleFileInfo): SubtitleFiles {
        this['audio_subtitle_file'] = audioSubtitleFile;
        return this;
    }
    public set audioSubtitleFile(audioSubtitleFile: SubtitleFileInfo  | undefined) {
        this['audio_subtitle_file'] = audioSubtitleFile;
    }
    public get audioSubtitleFile(): SubtitleFileInfo | undefined {
        return this['audio_subtitle_file'];
    }
}