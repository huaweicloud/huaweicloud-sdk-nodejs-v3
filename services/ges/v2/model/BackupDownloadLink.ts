

export class BackupDownloadLink {
    public name?: string;
    public size?: number;
    private 'download_link'?: string;
    private 'link_expired_time'?: string;
    public constructor(name?: string, size?: number, downloadLink?: string, linkExpiredTime?: string) { 
        this['name'] = name;
        this['size'] = size;
        this['download_link'] = downloadLink;
        this['link_expired_time'] = linkExpiredTime;
    }
    public withName(name: string): BackupDownloadLink {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): BackupDownloadLink {
        this['size'] = size;
        return this;
    }
    public withDownloadLink(downloadLink: string): BackupDownloadLink {
        this['download_link'] = downloadLink;
        return this;
    }
    public set downloadLink(downloadLink: string  | undefined) {
        this['download_link'] = downloadLink;
    }
    public get downloadLink(): string | undefined {
        return this['download_link'];
    }
    public withLinkExpiredTime(linkExpiredTime: string): BackupDownloadLink {
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