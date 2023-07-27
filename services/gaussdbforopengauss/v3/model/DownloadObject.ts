

export class DownloadObject {
    public name?: string;
    public size?: number;
    private 'download_link'?: string;
    private 'link_expired_time'?: string;
    public constructor() { 
    }
    public withName(name: string): DownloadObject {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): DownloadObject {
        this['size'] = size;
        return this;
    }
    public withDownloadLink(downloadLink: string): DownloadObject {
        this['download_link'] = downloadLink;
        return this;
    }
    public set downloadLink(downloadLink: string  | undefined) {
        this['download_link'] = downloadLink;
    }
    public get downloadLink(): string | undefined {
        return this['download_link'];
    }
    public withLinkExpiredTime(linkExpiredTime: string): DownloadObject {
        this['link_expired_time'] = linkExpiredTime;
        return this;
    }
    public set linkExpiredTime(linkExpiredTime: string  | undefined) {
        this['link_expired_time'] = linkExpiredTime;
    }
    public get linkExpiredTime(): string | undefined {
        return this['link_expired_time'];
    }
}