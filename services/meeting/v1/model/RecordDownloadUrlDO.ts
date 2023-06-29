

export class RecordDownloadUrlDO {
    public token?: string;
    public fileType?: string;
    public url?: string;
    public constructor() { 
    }
    public withToken(token: string): RecordDownloadUrlDO {
        this['token'] = token;
        return this;
    }
    public withFileType(fileType: string): RecordDownloadUrlDO {
        this['fileType'] = fileType;
        return this;
    }
    public withUrl(url: string): RecordDownloadUrlDO {
        this['url'] = url;
        return this;
    }
}