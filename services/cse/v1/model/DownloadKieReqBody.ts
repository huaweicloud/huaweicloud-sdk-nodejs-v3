

export class DownloadKieReqBody {
    public ids: Array<string>;
    public constructor(ids?: any) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): DownloadKieReqBody {
        this['ids'] = ids;
        return this;
    }
}