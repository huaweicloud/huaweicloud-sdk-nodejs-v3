

export class CreateClusterPublicKibanaElbWhiteList {
    public whiteList?: string;
    public enableWhiteList?: boolean;
    public constructor(whiteList?: string, enableWhiteList?: boolean) { 
        this['whiteList'] = whiteList;
        this['enableWhiteList'] = enableWhiteList;
    }
    public withWhiteList(whiteList: string): CreateClusterPublicKibanaElbWhiteList {
        this['whiteList'] = whiteList;
        return this;
    }
    public withEnableWhiteList(enableWhiteList: boolean): CreateClusterPublicKibanaElbWhiteList {
        this['enableWhiteList'] = enableWhiteList;
        return this;
    }
}