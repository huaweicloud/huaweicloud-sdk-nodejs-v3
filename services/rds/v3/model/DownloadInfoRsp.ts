

export class DownloadInfoRsp {
    private 'download_link'?: string;
    public category?: string;
    public constructor(downloadLink?: string, category?: string) { 
        this['download_link'] = downloadLink;
        this['category'] = category;
    }
    public withDownloadLink(downloadLink: string): DownloadInfoRsp {
        this['download_link'] = downloadLink;
        return this;
    }
    public set downloadLink(downloadLink: string  | undefined) {
        this['download_link'] = downloadLink;
    }
    public get downloadLink(): string | undefined {
        return this['download_link'];
    }
    public withCategory(category: string): DownloadInfoRsp {
        this['category'] = category;
        return this;
    }
}