

export class CheckJobNameReq {
    public name?: string;
    public type?: CheckJobNameReqTypeEnum | string;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): CheckJobNameReq {
        this['name'] = name;
        return this;
    }
    public withType(type: CheckJobNameReqTypeEnum | string): CheckJobNameReq {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckJobNameReqTypeEnum {
    TRANS = 'trans',
    SUBSCRIPTION = 'subscription',
    OFFLINE = 'offline'
}
