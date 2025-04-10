

export class AddLoginWhiteListRequestInfo {
    private 'private_ip'?: string;
    private 'login_ip'?: string;
    private 'login_user_name'?: string;
    public remarks?: string;
    private 'handle_event'?: boolean;
    public constructor(privateIp?: string, loginIp?: string, loginUserName?: string) { 
        this['private_ip'] = privateIp;
        this['login_ip'] = loginIp;
        this['login_user_name'] = loginUserName;
    }
    public withPrivateIp(privateIp: string): AddLoginWhiteListRequestInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withLoginIp(loginIp: string): AddLoginWhiteListRequestInfo {
        this['login_ip'] = loginIp;
        return this;
    }
    public set loginIp(loginIp: string  | undefined) {
        this['login_ip'] = loginIp;
    }
    public get loginIp(): string | undefined {
        return this['login_ip'];
    }
    public withLoginUserName(loginUserName: string): AddLoginWhiteListRequestInfo {
        this['login_user_name'] = loginUserName;
        return this;
    }
    public set loginUserName(loginUserName: string  | undefined) {
        this['login_user_name'] = loginUserName;
    }
    public get loginUserName(): string | undefined {
        return this['login_user_name'];
    }
    public withRemarks(remarks: string): AddLoginWhiteListRequestInfo {
        this['remarks'] = remarks;
        return this;
    }
    public withHandleEvent(handleEvent: boolean): AddLoginWhiteListRequestInfo {
        this['handle_event'] = handleEvent;
        return this;
    }
    public set handleEvent(handleEvent: boolean  | undefined) {
        this['handle_event'] = handleEvent;
    }
    public get handleEvent(): boolean | undefined {
        return this['handle_event'];
    }
}