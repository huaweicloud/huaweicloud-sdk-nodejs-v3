

export class LogoffUserSessionReq {
    private 'session_ids'?: Array<string>;
    private 'message_type'?: number;
    public message?: string;
    public title?: string;
    private 'delay_time'?: number;
    private 'transaction_id'?: string;
    public constructor(messageType?: number, delayTime?: number) { 
        this['message_type'] = messageType;
        this['delay_time'] = delayTime;
    }
    public withSessionIds(sessionIds: Array<string>): LogoffUserSessionReq {
        this['session_ids'] = sessionIds;
        return this;
    }
    public set sessionIds(sessionIds: Array<string>  | undefined) {
        this['session_ids'] = sessionIds;
    }
    public get sessionIds(): Array<string> | undefined {
        return this['session_ids'];
    }
    public withMessageType(messageType: number): LogoffUserSessionReq {
        this['message_type'] = messageType;
        return this;
    }
    public set messageType(messageType: number  | undefined) {
        this['message_type'] = messageType;
    }
    public get messageType(): number | undefined {
        return this['message_type'];
    }
    public withMessage(message: string): LogoffUserSessionReq {
        this['message'] = message;
        return this;
    }
    public withTitle(title: string): LogoffUserSessionReq {
        this['title'] = title;
        return this;
    }
    public withDelayTime(delayTime: number): LogoffUserSessionReq {
        this['delay_time'] = delayTime;
        return this;
    }
    public set delayTime(delayTime: number  | undefined) {
        this['delay_time'] = delayTime;
    }
    public get delayTime(): number | undefined {
        return this['delay_time'];
    }
    public withTransactionId(transactionId: string): LogoffUserSessionReq {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
}