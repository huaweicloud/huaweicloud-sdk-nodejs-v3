

export class CreateDownloadUrlReq {
    public region?: string;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): CreateDownloadUrlReq {
        this['region'] = region;
        return this;
    }
}