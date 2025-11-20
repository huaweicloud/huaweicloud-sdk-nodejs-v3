

export class SetTenantNoticeConfigurationReq {
    public type?: string;
    private 'send_msg'?: boolean;
    public properties?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: string): SetTenantNoticeConfigurationReq {
        this['type'] = type;
        return this;
    }
    public withSendMsg(sendMsg: boolean): SetTenantNoticeConfigurationReq {
        this['send_msg'] = sendMsg;
        return this;
    }
    public set sendMsg(sendMsg: boolean  | undefined) {
        this['send_msg'] = sendMsg;
    }
    public get sendMsg(): boolean | undefined {
        return this['send_msg'];
    }
    public withProperties(properties: string): SetTenantNoticeConfigurationReq {
        this['properties'] = properties;
        return this;
    }
}