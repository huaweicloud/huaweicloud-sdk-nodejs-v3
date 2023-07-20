

export class GetBackupDownloadLinkResponseBodyFiles {
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
    public withName(name: string): GetBackupDownloadLinkResponseBodyFiles {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): GetBackupDownloadLinkResponseBodyFiles {
        this['size'] = size;
        return this;
    }
    public withDownloadLink(downloadLink: string): GetBackupDownloadLinkResponseBodyFiles {
        this['download_link'] = downloadLink;
        return this;
    }
    public set downloadLink(downloadLink: string  | undefined) {
        this['download_link'] = downloadLink;
    }
    public get downloadLink(): string | undefined {
        return this['download_link'];
    }
    public withLinkExpiredTime(linkExpiredTime: string): GetBackupDownloadLinkResponseBodyFiles {
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