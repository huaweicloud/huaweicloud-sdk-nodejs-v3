

export class ClusterDetailFailedReasons {
    public errorCode?: string;
    public errorMsg?: string;
    public constructor() { 
    }
    public withErrorCode(errorCode: string): ClusterDetailFailedReasons {
        this['errorCode'] = errorCode;
        return this;
    }
    public withErrorMsg(errorMsg: string): ClusterDetailFailedReasons {
        this['errorMsg'] = errorMsg;
        return this;
    }
}