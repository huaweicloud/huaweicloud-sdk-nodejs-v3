

export class FailedReasonsCREATEFAILED {
    public errorCode?: string;
    public errorMsg?: string;
    public constructor() { 
    }
    public withErrorCode(errorCode: string): FailedReasonsCREATEFAILED {
        this['errorCode'] = errorCode;
        return this;
    }
    public withErrorMsg(errorMsg: string): FailedReasonsCREATEFAILED {
        this['errorMsg'] = errorMsg;
        return this;
    }
}