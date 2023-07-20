import { AudioConfig } from './AudioConfig';


export class PostShortAudioAssessmentReq {
    public config?: AudioConfig;
    private 'audio_data'?: string;
    private 'ref_text'?: string;
    public constructor(config?: AudioConfig, audioData?: string, refText?: string) { 
        this['config'] = config;
        this['audio_data'] = audioData;
        this['ref_text'] = refText;
    }
    public withConfig(config: AudioConfig): PostShortAudioAssessmentReq {
        this['config'] = config;
        return this;
    }
    public withAudioData(audioData: string): PostShortAudioAssessmentReq {
        this['audio_data'] = audioData;
        return this;
    }
    public set audioData(audioData: string  | undefined) {
        this['audio_data'] = audioData;
    }
    public get audioData(): string | undefined {
        return this['audio_data'];
    }
    public withRefText(refText: string): PostShortAudioAssessmentReq {
        this['ref_text'] = refText;
        return this;
    }
    public set refText(refText: string  | undefined) {
        this['ref_text'] = refText;
    }
    public get refText(): string | undefined {
        return this['ref_text'];
    }
}