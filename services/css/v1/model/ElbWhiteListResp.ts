

export class ElbWhiteListResp {
    public enableWhiteList?: boolean;
    public whiteList?: string;
    public constructor() { 
    }
    public withEnableWhiteList(enableWhiteList: boolean): ElbWhiteListResp {
        this['enableWhiteList'] = enableWhiteList;
        return this;
    }
    public withWhiteList(whiteList: string): ElbWhiteListResp {
        this['whiteList'] = whiteList;
        return this;
    }
}