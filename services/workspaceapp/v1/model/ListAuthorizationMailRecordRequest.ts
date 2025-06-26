

export class ListAuthorizationMailRecordRequest {
    public limit?: number;
    public offset?: number;
    private 'app_group_id'?: string;
    public account?: string;
    private 'mail_send_type'?: string;
    private 'mail_send_result'?: string;
    public constructor(appGroupId?: string) { 
        this['app_group_id'] = appGroupId;
    }
    public withLimit(limit: number): ListAuthorizationMailRecordRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAuthorizationMailRecordRequest {
        this['offset'] = offset;
        return this;
    }
    public withAppGroupId(appGroupId: string): ListAuthorizationMailRecordRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withAccount(account: string): ListAuthorizationMailRecordRequest {
        this['account'] = account;
        return this;
    }
    public withMailSendType(mailSendType: string): ListAuthorizationMailRecordRequest {
        this['mail_send_type'] = mailSendType;
        return this;
    }
    public set mailSendType(mailSendType: string  | undefined) {
        this['mail_send_type'] = mailSendType;
    }
    public get mailSendType(): string | undefined {
        return this['mail_send_type'];
    }
    public withMailSendResult(mailSendResult: string): ListAuthorizationMailRecordRequest {
        this['mail_send_result'] = mailSendResult;
        return this;
    }
    public set mailSendResult(mailSendResult: string  | undefined) {
        this['mail_send_result'] = mailSendResult;
    }
    public get mailSendResult(): string | undefined {
        return this['mail_send_result'];
    }
}