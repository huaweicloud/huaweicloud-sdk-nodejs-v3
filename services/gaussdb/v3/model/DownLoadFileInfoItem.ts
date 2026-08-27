

export class DownLoadFileInfoItem {
    public id?: string;
    private 'file_name'?: string;
    private 'file_size'?: number;
    private 'download_url'?: string;
    private 'expire_time'?: number;
    public constructor() { 
    }
    public withId(id: string): DownLoadFileInfoItem {
        this['id'] = id;
        return this;
    }
    public withFileName(fileName: string): DownLoadFileInfoItem {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileSize(fileSize: number): DownLoadFileInfoItem {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withDownloadUrl(downloadUrl: string): DownLoadFileInfoItem {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string  | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl(): string | undefined {
        return this['download_url'];
    }
    public withExpireTime(expireTime: number): DownLoadFileInfoItem {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
}