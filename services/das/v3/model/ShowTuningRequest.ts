

export class ShowTuningRequest {
    private 'message_id'?: string;
    private 'connection_id'?: string;
    private 'X-Language'?: string;
    public constructor(messageId?: string, connectionId?: string) { 
        this['message_id'] = messageId;
        this['connection_id'] = connectionId;
    }
    public withMessageId(messageId: string): ShowTuningRequest {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): string | undefined {
        return this['message_id'];
    }
    public withConnectionId(connectionId: string): ShowTuningRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withXLanguage(xLanguage: string): ShowTuningRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}