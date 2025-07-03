

export class StartPublicWhitelistReq {
    private 'white_list'?: string;
    public constructor(whiteList?: string) { 
        this['white_list'] = whiteList;
    }
    public withWhiteList(whiteList: string): StartPublicWhitelistReq {
        this['white_list'] = whiteList;
        return this;
    }
    public set whiteList(whiteList: string  | undefined) {
        this['white_list'] = whiteList;
    }
    public get whiteList(): string | undefined {
        return this['white_list'];
    }
}