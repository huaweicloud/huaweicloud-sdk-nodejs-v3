import { AccountTypeEnum } from './AccountTypeEnum';


export class AuthorizationMail {
    public id?: string;
    public account?: string;
    private 'account_auth_type'?: AccountTypeEnum;
    private 'account_auth_name'?: string;
    private 'app_group_id'?: string;
    private 'app_group_name'?: string;
    private 'mail_send_type'?: string;
    private 'mail_send_result'?: string;
    private 'error_msg'?: string;
    private 'send_at'?: Date;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): AuthorizationMail {
        this['id'] = id;
        return this;
    }
    public withAccount(account: string): AuthorizationMail {
        this['account'] = account;
        return this;
    }
    public withAccountAuthType(accountAuthType: AccountTypeEnum): AuthorizationMail {
        this['account_auth_type'] = accountAuthType;
        return this;
    }
    public set accountAuthType(accountAuthType: AccountTypeEnum  | undefined) {
        this['account_auth_type'] = accountAuthType;
    }
    public get accountAuthType(): AccountTypeEnum | undefined {
        return this['account_auth_type'];
    }
    public withAccountAuthName(accountAuthName: string): AuthorizationMail {
        this['account_auth_name'] = accountAuthName;
        return this;
    }
    public set accountAuthName(accountAuthName: string  | undefined) {
        this['account_auth_name'] = accountAuthName;
    }
    public get accountAuthName(): string | undefined {
        return this['account_auth_name'];
    }
    public withAppGroupId(appGroupId: string): AuthorizationMail {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withAppGroupName(appGroupName: string): AuthorizationMail {
        this['app_group_name'] = appGroupName;
        return this;
    }
    public set appGroupName(appGroupName: string  | undefined) {
        this['app_group_name'] = appGroupName;
    }
    public get appGroupName(): string | undefined {
        return this['app_group_name'];
    }
    public withMailSendType(mailSendType: string): AuthorizationMail {
        this['mail_send_type'] = mailSendType;
        return this;
    }
    public set mailSendType(mailSendType: string  | undefined) {
        this['mail_send_type'] = mailSendType;
    }
    public get mailSendType(): string | undefined {
        return this['mail_send_type'];
    }
    public withMailSendResult(mailSendResult: string): AuthorizationMail {
        this['mail_send_result'] = mailSendResult;
        return this;
    }
    public set mailSendResult(mailSendResult: string  | undefined) {
        this['mail_send_result'] = mailSendResult;
    }
    public get mailSendResult(): string | undefined {
        return this['mail_send_result'];
    }
    public withErrorMsg(errorMsg: string): AuthorizationMail {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withSendAt(sendAt: Date): AuthorizationMail {
        this['send_at'] = sendAt;
        return this;
    }
    public set sendAt(sendAt: Date  | undefined) {
        this['send_at'] = sendAt;
    }
    public get sendAt(): Date | undefined {
        return this['send_at'];
    }
}