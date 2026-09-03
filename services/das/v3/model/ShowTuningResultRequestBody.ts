

export class ShowTuningResultRequestBody {
    private 'message_id'?: string;
    public constructor(messageId?: string) { 
        this['message_id'] = messageId;
    }
    public withMessageId(messageId: string): ShowTuningResultRequestBody {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): string | undefined {
        return this['message_id'];
    }
}