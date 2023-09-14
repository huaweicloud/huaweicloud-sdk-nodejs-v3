

export class FileInfo {
    public name?: string;
    public size?: number;
    private 'updated_time'?: string;
    private 'download_link'?: string;
    private 'link_expired_time'?: string;
    public constructor(name?: string, size?: number, updatedTime?: string, downloadLink?: string, linkExpiredTime?: string) { 
        this['name'] = name;
        this['size'] = size;
        this['updated_time'] = updatedTime;
        this['download_link'] = downloadLink;
        this['link_expired_time'] = linkExpiredTime;
    }
    public withName(name: string): FileInfo {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): FileInfo {
        this['size'] = size;
        return this;
    }
    public withUpdatedTime(updatedTime: string): FileInfo {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withDownloadLink(downloadLink: string): FileInfo {
        this['download_link'] = downloadLink;
        return this;
    }
    public set downloadLink(downloadLink: string  | undefined) {
        this['download_link'] = downloadLink;
    }
    public get downloadLink(): string | undefined {
        return this['download_link'];
    }
    public withLinkExpiredTime(linkExpiredTime: string): FileInfo {
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