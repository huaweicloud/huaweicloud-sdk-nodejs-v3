

export class DownloadAddressForList {
    public id?: string;
    private 'download_url'?: string;
    public constructor() { 
    }
    public withId(id: string): DownloadAddressForList {
        this['id'] = id;
        return this;
    }
    public withDownloadUrl(downloadUrl: string): DownloadAddressForList {
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