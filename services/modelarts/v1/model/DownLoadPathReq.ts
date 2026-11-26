

export class DownLoadPathReq {
    public expires?: number;
    public path?: string;
    public constructor() { 
    }
    public withExpires(expires: number): DownLoadPathReq {
        this['expires'] = expires;
        return this;
    }
    public withPath(path: string): DownLoadPathReq {
        this['path'] = path;
        return this;
    }
}