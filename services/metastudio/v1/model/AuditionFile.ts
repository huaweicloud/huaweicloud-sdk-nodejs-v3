

export class AuditionFile {
    private 'download_url'?: string;
    public constructor(downloadUrl?: string) { 
        this['download_url'] = downloadUrl;
    }
    public withDownloadUrl(downloadUrl: string): AuditionFile {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string  | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl(): string | undefined {
        return this['download_url'];
    }
}