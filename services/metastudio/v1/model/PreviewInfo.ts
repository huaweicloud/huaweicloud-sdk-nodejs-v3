

export class PreviewInfo {
    private 'text_sha256'?: string;
    private 'audio_file_download_url'?: string;
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
}