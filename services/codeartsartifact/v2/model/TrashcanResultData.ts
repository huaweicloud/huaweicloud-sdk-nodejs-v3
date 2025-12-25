

export class TrashcanResultData {
    public successNum?: number;
    public failedNum?: number;
    public failedMessages?: Array<string>;
    public constructor() { 
    }
    public withSuccessNum(successNum: number): TrashcanResultData {
        this['successNum'] = successNum;
        return this;
    }
    public withFailedNum(failedNum: number): TrashcanResultData {
        this['failedNum'] = failedNum;
        return this;
    }
    public withFailedMessages(failedMessages: Array<string>): TrashcanResultData {
        this['failedMessages'] = failedMessages;
        return this;
    }
}