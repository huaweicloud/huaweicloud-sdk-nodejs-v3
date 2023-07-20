

export class DownloadKieReqBody {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): DownloadKieReqBody {
        this['ids'] = ids;
        return this;
    }
}