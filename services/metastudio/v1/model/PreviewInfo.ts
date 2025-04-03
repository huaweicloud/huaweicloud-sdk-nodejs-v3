

export class PreviewInfo {
    private 'text_sha256'?: string;
    private 'audio_file_download_url'?: string;
    private 'action_file_download_url'?: string;
    private 'audio_duration'?: number;
    public constructor() { 
    }
    public withTextSha256(textSha256: string): PreviewInfo {
        this['text_sha256'] = textSha256;
        return this;
    }
    public set textSha256(textSha256: string  | undefined) {
        this['text_sha256'] = textSha256;
    }
    public get textSha256(): string | undefined {
        return this['text_sha256'];
    }
    public withAudioFileDownloadUrl(audioFileDownloadUrl: string): PreviewInfo {
        this['audio_file_download_url'] = audioFileDownloadUrl;
        return this;
    }
    public set audioFileDownloadUrl(audioFileDownloadUrl: string  | undefined) {
        this['audio_file_download_url'] = audioFileDownloadUrl;
    }
    public get audioFileDownloadUrl(): string | undefined {
        return this['audio_file_download_url'];
    }
    public withActionFileDownloadUrl(actionFileDownloadUrl: string): PreviewInfo {
        this['action_file_download_url'] = actionFileDownloadUrl;
        return this;
    }
    public set actionFileDownloadUrl(actionFileDownloadUrl: string  | undefined) {
        this['action_file_download_url'] = actionFileDownloadUrl;
    }
    public get actionFileDownloadUrl(): string | undefined {
        return this['action_file_download_url'];
    }
    public withAudioDuration(audioDuration: number): PreviewInfo {
        this['audio_duration'] = audioDuration;
        return this;
    }
    public set audioDuration(audioDuration: number  | undefined) {
        this['audio_duration'] = audioDuration;
    }
    public get audioDuration(): number | undefined {
        return this['audio_duration'];
    }
}