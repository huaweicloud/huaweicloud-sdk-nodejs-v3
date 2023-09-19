

export class CreateClusterElbWhiteList {
    public enableWhiteList?: boolean;
    public whiteList?: string;
    public constructor(enableWhiteList?: boolean) { 
        this['enableWhiteList'] = enableWhiteList;
    }
    public withEnableWhiteList(enableWhiteList: boolean): CreateClusterElbWhiteList {
        this['enableWhiteList'] = enableWhiteList;
        return this;
    }
    public withWhiteList(whiteList: string): CreateClusterElbWhiteList {
        this['whiteList'] = whiteList;
        return this;
    }
}