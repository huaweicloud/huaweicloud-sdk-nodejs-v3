

export class QueryBinlogDownloadLinkRequestV3Body {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): QueryBinlogDownloadLinkRequestV3Body {
        this['ids'] = ids;
        return this;
    }
}