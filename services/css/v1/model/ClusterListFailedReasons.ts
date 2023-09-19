

export class ClusterListFailedReasons {
    public errorCode?: string;
    public errorMsg?: string;
    public constructor() { 
    }
    public withErrorCode(errorCode: string): ClusterListFailedReasons {
        this['errorCode'] = errorCode;
        return this;
    }
    public withErrorMsg(errorMsg: string): ClusterListFailedReasons {
        this['errorMsg'] = errorMsg;
        return this;
    }
}