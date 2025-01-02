

export class InterpreterAiDigitalInfo {
    public type?: string;
    public digitalAccount?: string;
    public digitalName?: string;
    public presenterAccount?: string;
    public presenterRealNameAccount?: string;
    public presenterName?: string;
    public presenterUserID?: string;
    public localConfId?: string;
    public localConfAddr?: string;
    public localAuthInfo?: string;
    public localNeedProxy?: boolean;
    public localAuthUrl?: string;
    public localAuthAppId?: string;
    public constructor() { 
    }
    public withType(type: string): InterpreterAiDigitalInfo {
        this['type'] = type;
        return this;
    }
    public withDigitalAccount(digitalAccount: string): InterpreterAiDigitalInfo {
        this['digitalAccount'] = digitalAccount;
        return this;
    }
    public withDigitalName(digitalName: string): InterpreterAiDigitalInfo {
        this['digitalName'] = digitalName;
        return this;
    }
    public withPresenterAccount(presenterAccount: string): InterpreterAiDigitalInfo {
        this['presenterAccount'] = presenterAccount;
        return this;
    }
    public withPresenterRealNameAccount(presenterRealNameAccount: string): InterpreterAiDigitalInfo {
        this['presenterRealNameAccount'] = presenterRealNameAccount;
        return this;
    }
    public withPresenterName(presenterName: string): InterpreterAiDigitalInfo {
        this['presenterName'] = presenterName;
        return this;
    }
    public withPresenterUserID(presenterUserID: string): InterpreterAiDigitalInfo {
        this['presenterUserID'] = presenterUserID;
        return this;
    }
    public withLocalConfId(localConfId: string): InterpreterAiDigitalInfo {
        this['localConfId'] = localConfId;
        return this;
    }
    public withLocalConfAddr(localConfAddr: string): InterpreterAiDigitalInfo {
        this['localConfAddr'] = localConfAddr;
        return this;
    }
    public withLocalAuthInfo(localAuthInfo: string): InterpreterAiDigitalInfo {
        this['localAuthInfo'] = localAuthInfo;
        return this;
    }
    public withLocalNeedProxy(localNeedProxy: boolean): InterpreterAiDigitalInfo {
        this['localNeedProxy'] = localNeedProxy;
        return this;
    }
    public withLocalAuthUrl(localAuthUrl: string): InterpreterAiDigitalInfo {
        this['localAuthUrl'] = localAuthUrl;
        return this;
    }
    public withLocalAuthAppId(localAuthAppId: string): InterpreterAiDigitalInfo {
        this['localAuthAppId'] = localAuthAppId;
        return this;
    }
}