

export class StartKibanaPublicReqElbWhitelist {
    public enableWhiteList?: boolean;
    public whiteList?: string;
    public constructor(enableWhiteList?: boolean, whiteList?: string) { 
        this['enableWhiteList'] = enableWhiteList;
        this['whiteList'] = whiteList;
    }
    public withEnableWhiteList(enableWhiteList: boolean): StartKibanaPublicReqElbWhitelist {
        this['enableWhiteList'] = enableWhiteList;
        return this;
    }
    public withWhiteList(whiteList: string): StartKibanaPublicReqElbWhitelist {
        this['whiteList'] = whiteList;
        return this;
    }
}