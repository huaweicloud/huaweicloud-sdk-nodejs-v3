

export class StartPublicWhitelistReq {
    public whiteList?: string;
    public constructor(whiteList?: string) { 
        this['whiteList'] = whiteList;
    }
    public withWhiteList(whiteList: string): StartPublicWhitelistReq {
        this['whiteList'] = whiteList;
        return this;
    }
}