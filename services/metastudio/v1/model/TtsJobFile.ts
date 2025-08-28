

export class TtsJobFile {
    private 'audio_file_url'?: string;
    private 'audio_info_file_url'?: string;
    private 'audio_srt_file_url'?: string;
    private 'audio_action_file_url'?: string;
    public constructor() { 
    }
    public withAudioFileUrl(audioFileUrl: string): TtsJobFile {
        this['audio_file_url'] = audioFileUrl;
        return this;
    }
    public set audioFileUrl(audioFileUrl: string  | undefined) {
        this['audio_file_url'] = audioFileUrl;
    }
    public get audioFileUrl(): string | undefined {
        return this['audio_file_url'];
    }
    public withAudioInfoFileUrl(audioInfoFileUrl: string): TtsJobFile {
        this['audio_info_file_url'] = audioInfoFileUrl;
        return this;
    }
    public set audioInfoFileUrl(audioInfoFileUrl: string  | undefined) {
        this['audio_info_file_url'] = audioInfoFileUrl;
    }
    public get audioInfoFileUrl(): string | undefined {
        return this['audio_info_file_url'];
    }
    public withAudioSrtFileUrl(audioSrtFileUrl: string): TtsJobFile {
        this['audio_srt_file_url'] = audioSrtFileUrl;
        return this;
    }
    public set audioSrtFileUrl(audioSrtFileUrl: string  | undefined) {
        this['audio_srt_file_url'] = audioSrtFileUrl;
    }
    public get audioSrtFileUrl(): string | undefined {
        return this['audio_srt_file_url'];
    }
    public withAudioActionFileUrl(audioActionFileUrl: string): TtsJobFile {
        this['audio_action_file_url'] = audioActionFileUrl;
        return this;
    }
    public set audioActionFileUrl(audioActionFileUrl: string  | undefined) {
        this['audio_action_file_url'] = audioActionFileUrl;
    }
    public get audioActionFileUrl(): string | undefined {
        return this['audio_action_file_url'];
    }
}