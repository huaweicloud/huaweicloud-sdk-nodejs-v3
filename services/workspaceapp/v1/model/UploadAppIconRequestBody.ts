

export class UploadAppIconRequestBody {
    public data?: any;
    private 'icon_url'?: string;
    public constructor() { 
    }
    public withData(data: any): UploadAppIconRequestBody {
        this['data'] = data;
        return this;
    }
    public withIconUrl(iconUrl: string): UploadAppIconRequestBody {
        this['icon_url'] = iconUrl;
        return this;
    }
    public set iconUrl(iconUrl: string  | undefined) {
        this['icon_url'] = iconUrl;
    }
    public get iconUrl(): string | undefined {
        return this['icon_url'];
    }
}