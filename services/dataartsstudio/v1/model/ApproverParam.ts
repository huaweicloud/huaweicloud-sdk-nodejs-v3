

export class ApproverParam {
    private 'approver_name'?: string;
    private 'user_id'?: string;
    public email?: string;
    private 'phone_number'?: string;
    private 'email_notify'?: boolean;
    private 'sms_notify'?: boolean;
    public constructor(approverName?: string, userId?: string) { 
        this['approver_name'] = approverName;
        this['user_id'] = userId;
    }
    public withApproverName(approverName: string): ApproverParam {
        this['approver_name'] = approverName;
        return this;
    }
    public set approverName(approverName: string  | undefined) {
        this['approver_name'] = approverName;
    }
    public get approverName(): string | undefined {
        return this['approver_name'];
    }
    public withUserId(userId: string): ApproverParam {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withEmail(email: string): ApproverParam {
        this['email'] = email;
        return this;
    }
    public withPhoneNumber(phoneNumber: string): ApproverParam {
        this['phone_number'] = phoneNumber;
        return this;
    }
    public set phoneNumber(phoneNumber: string  | undefined) {
        this['phone_number'] = phoneNumber;
    }
    public get phoneNumber(): string | undefined {
        return this['phone_number'];
    }
    public withEmailNotify(emailNotify: boolean): ApproverParam {
        this['email_notify'] = emailNotify;
        return this;
    }
    public set emailNotify(emailNotify: boolean  | undefined) {
        this['email_notify'] = emailNotify;
    }
    public get emailNotify(): boolean | undefined {
        return this['email_notify'];
    }
    public withSmsNotify(smsNotify: boolean): ApproverParam {
        this['sms_notify'] = smsNotify;
        return this;
    }
    public set smsNotify(smsNotify: boolean  | undefined) {
        this['sms_notify'] = smsNotify;
    }
    public get smsNotify(): boolean | undefined {
        return this['sms_notify'];
    }
}