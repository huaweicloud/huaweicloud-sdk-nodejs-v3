

export class WarningList {
    public warningCode?: number;
    public warningMsg?: string;
    public constructor() { 
    }
    public withWarningCode(warningCode: number): WarningList {
        this['warningCode'] = warningCode;
        return this;
    }
    public withWarningMsg(warningMsg: string): WarningList {
        this['warningMsg'] = warningMsg;
        return this;
    }
}