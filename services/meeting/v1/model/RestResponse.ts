

export class RestResponse {
    public returnCode: number;
    public returnDesc?: string;
    public constructor(returnCode?: any) { 
        this['returnCode'] = returnCode;
    }
    public withReturnCode(returnCode: number): RestResponse {
        this['returnCode'] = returnCode;
        return this;
    }
    public withReturnDesc(returnDesc: string): RestResponse {
        this['returnDesc'] = returnDesc;
        return this;
    }
}