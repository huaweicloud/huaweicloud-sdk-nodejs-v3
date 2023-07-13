

export class DeadletterResendRespResendResults {
    private 'msg_id'?: string | undefined;
    private 'error_code'?: string | undefined;
    private 'error_message'?: string | undefined;
    public constructor() { 
    }
    public withMsgId(msgId: string): DeadletterResendRespResendResults {
        this['msg_id'] = msgId;
        return this;
    }
    public set msgId(msgId: string | undefined) {
        this['msg_id'] = msgId;
    }
    public get msgId() {
        return this['msg_id'];
    }
    public withErrorCode(errorCode: string): DeadletterResendRespResendResults {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): DeadletterResendRespResendResults {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage() {
        return this['error_message'];
    }
}