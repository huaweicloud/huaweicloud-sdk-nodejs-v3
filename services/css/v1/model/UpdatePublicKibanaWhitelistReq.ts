

export class UpdatePublicKibanaWhitelistReq {
    public whiteList?: string;
    public constructor(whiteList?: string) { 
        this['whiteList'] = whiteList;
    }
    public withWhiteList(whiteList: string): UpdatePublicKibanaWhitelistReq {
        this['whiteList'] = whiteList;
        return this;
    }
}