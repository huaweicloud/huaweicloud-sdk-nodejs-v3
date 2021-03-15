

export class UpdateSubReq {
    public callbackurl?: string;
    public constructor() { 
    }
    public withCallbackurl(callbackurl: string): UpdateSubReq {
        this['callbackurl'] = callbackurl;
        return this;
    }
}