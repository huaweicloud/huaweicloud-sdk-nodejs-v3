

export class GetBackupDownloadLinkFiles {
    public name?: string;
    public size?: number;
    private 'download_link'?: string;
    private 'link_expired_time'?: string;
    private 'database_name'?: string;
    public constructor(name?: string, size?: number, downloadLink?: string, linkExpiredTime?: string, databaseName?: string) { 
        this['name'] = name;
        this['size'] = size;
        this['download_link'] = downloadLink;
        this['link_expired_time'] = linkExpiredTime;
        this['database_name'] = databaseName;
    }
    public withName(name: string): GetBackupDownloadLinkFiles {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): GetBackupDownloadLinkFiles {
        this['size'] = size;
        return this;
    }
    public withDownloadLink(downloadLink: string): GetBackupDownloadLinkFiles {
        this['download_link'] = downloadLink;
        return this;
    }
    public set downloadLink(downloadLink: string  | undefined) {
        this['download_link'] = downloadLink;
    }
    public get downloadLink(): string | undefined {
        return this['download_link'];
    }
    public withLinkExpiredTime(linkExpiredTime: string): GetBackupDownloadLinkFiles {
        this['link_expired_time'] = linkExpiredTime;
        return this;
    }
    public set linkExpiredTime(linkExpiredTime: string  | undefined) {
        this['link_expired_time'] = linkExpiredTime;
    }
    public get linkExpiredTime(): string | undefined {
        return this['link_expired_time'];
    }
    public withDatabaseName(databaseName: string): GetBackupDownloadLinkFiles {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
}