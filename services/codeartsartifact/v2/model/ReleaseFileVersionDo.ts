

export class ReleaseFileVersionDo {
    public version?: string;
    public path?: string;
    private 'download_url'?: string;
    public constructor() { 
    }
    public withVersion(version: string): ReleaseFileVersionDo {
        this['version'] = version;
        return this;
    }
    public withPath(path: string): ReleaseFileVersionDo {
        this['path'] = path;
        return this;
    }
    public withDownloadUrl(downloadUrl: string): ReleaseFileVersionDo {
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