

export class KibanaElbWhiteListResp {
    public enableWhiteList?: boolean;
    public whiteList?: string;
    public constructor() { 
    }
    public withEnableWhiteList(enableWhiteList: boolean): KibanaElbWhiteListResp {
        this['enableWhiteList'] = enableWhiteList;
        return this;
    }
    public withWhiteList(whiteList: string): KibanaElbWhiteListResp {
        this['whiteList'] = whiteList;
        return this;
    }
}