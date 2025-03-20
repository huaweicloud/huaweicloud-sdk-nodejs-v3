

export class PersonnelResponse {
    private 'is_root_user'?: boolean;
    private 'dingtalk_webhook'?: string;
    public email?: string;
    public id?: string;
    public mobile?: string;
    public name?: string;
    private 'wecom_webhook'?: string;
    public description?: string;
    private 'dingtalk_private_key'?: string;
    private 'msg_subscription_status'?: number;
    private 'weichat_subscription_status'?: number;
    private 'ding_talk_subscription_status'?: number;
    private 'email_subscription_status'?: number;
    private 'call_notify_subscription_status'?: number;
    private 'source_type'?: string;
    private 'source_status'?: string;
    private 'lark_webhook'?: string;
    private 'lark_subscription_status'?: number;
    public constructor() { 
    }
    public withIsRootUser(isRootUser: boolean): PersonnelResponse {
        this['is_root_user'] = isRootUser;
        return this;
    }
    public set isRootUser(isRootUser: boolean  | undefined) {
        this['is_root_user'] = isRootUser;
    }
    public get isRootUser(): boolean | undefined {
        return this['is_root_user'];
    }
    public withDingtalkWebhook(dingtalkWebhook: string): PersonnelResponse {
        this['dingtalk_webhook'] = dingtalkWebhook;
        return this;
    }
    public set dingtalkWebhook(dingtalkWebhook: string  | undefined) {
        this['dingtalk_webhook'] = dingtalkWebhook;
    }
    public get dingtalkWebhook(): string | undefined {
        return this['dingtalk_webhook'];
    }
    public withEmail(email: string): PersonnelResponse {
        this['email'] = email;
        return this;
    }
    public withId(id: string): PersonnelResponse {
        this['id'] = id;
        return this;
    }
    public withMobile(mobile: string): PersonnelResponse {
        this['mobile'] = mobile;
        return this;
    }
    public withName(name: string): PersonnelResponse {
        this['name'] = name;
        return this;
    }
    public withWecomWebhook(wecomWebhook: string): PersonnelResponse {
        this['wecom_webhook'] = wecomWebhook;
        return this;
    }
    public set wecomWebhook(wecomWebhook: string  | undefined) {
        this['wecom_webhook'] = wecomWebhook;
    }
    public get wecomWebhook(): string | undefined {
        return this['wecom_webhook'];
    }
    public withDescription(description: string): PersonnelResponse {
        this['description'] = description;
        return this;
    }
    public withDingtalkPrivateKey(dingtalkPrivateKey: string): PersonnelResponse {
        this['dingtalk_private_key'] = dingtalkPrivateKey;
        return this;
    }
    public set dingtalkPrivateKey(dingtalkPrivateKey: string  | undefined) {
        this['dingtalk_private_key'] = dingtalkPrivateKey;
    }
    public get dingtalkPrivateKey(): string | undefined {
        return this['dingtalk_private_key'];
    }
    public withMsgSubscriptionStatus(msgSubscriptionStatus: number): PersonnelResponse {
        this['msg_subscription_status'] = msgSubscriptionStatus;
        return this;
    }
    public set msgSubscriptionStatus(msgSubscriptionStatus: number  | undefined) {
        this['msg_subscription_status'] = msgSubscriptionStatus;
    }
    public get msgSubscriptionStatus(): number | undefined {
        return this['msg_subscription_status'];
    }
    public withWeichatSubscriptionStatus(weichatSubscriptionStatus: number): PersonnelResponse {
        this['weichat_subscription_status'] = weichatSubscriptionStatus;
        return this;
    }
    public set weichatSubscriptionStatus(weichatSubscriptionStatus: number  | undefined) {
        this['weichat_subscription_status'] = weichatSubscriptionStatus;
    }
    public get weichatSubscriptionStatus(): number | undefined {
        return this['weichat_subscription_status'];
    }
    public withDingTalkSubscriptionStatus(dingTalkSubscriptionStatus: number): PersonnelResponse {
        this['ding_talk_subscription_status'] = dingTalkSubscriptionStatus;
        return this;
    }
    public set dingTalkSubscriptionStatus(dingTalkSubscriptionStatus: number  | undefined) {
        this['ding_talk_subscription_status'] = dingTalkSubscriptionStatus;
    }
    public get dingTalkSubscriptionStatus(): number | undefined {
        return this['ding_talk_subscription_status'];
    }
    public withEmailSubscriptionStatus(emailSubscriptionStatus: number): PersonnelResponse {
        this['email_subscription_status'] = emailSubscriptionStatus;
        return this;
    }
    public set emailSubscriptionStatus(emailSubscriptionStatus: number  | undefined) {
        this['email_subscription_status'] = emailSubscriptionStatus;
    }
    public get emailSubscriptionStatus(): number | undefined {
        return this['email_subscription_status'];
    }
    public withCallNotifySubscriptionStatus(callNotifySubscriptionStatus: number): PersonnelResponse {
        this['call_notify_subscription_status'] = callNotifySubscriptionStatus;
        return this;
    }
    public set callNotifySubscriptionStatus(callNotifySubscriptionStatus: number  | undefined) {
        this['call_notify_subscription_status'] = callNotifySubscriptionStatus;
    }
    public get callNotifySubscriptionStatus(): number | undefined {
        return this['call_notify_subscription_status'];
    }
    public withSourceType(sourceType: string): PersonnelResponse {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withSourceStatus(sourceStatus: string): PersonnelResponse {
        this['source_status'] = sourceStatus;
        return this;
    }
    public set sourceStatus(sourceStatus: string  | undefined) {
        this['source_status'] = sourceStatus;
    }
    public get sourceStatus(): string | undefined {
        return this['source_status'];
    }
    public withLarkWebhook(larkWebhook: string): PersonnelResponse {
        this['lark_webhook'] = larkWebhook;
        return this;
    }
    public set larkWebhook(larkWebhook: string  | undefined) {
        this['lark_webhook'] = larkWebhook;
    }
    public get larkWebhook(): string | undefined {
        return this['lark_webhook'];
    }
    public withLarkSubscriptionStatus(larkSubscriptionStatus: number): PersonnelResponse {
        this['lark_subscription_status'] = larkSubscriptionStatus;
        return this;
    }
    public set larkSubscriptionStatus(larkSubscriptionStatus: number  | undefined) {
        this['lark_subscription_status'] = larkSubscriptionStatus;
    }
    public get larkSubscriptionStatus(): number | undefined {
        return this['lark_subscription_status'];
    }
}