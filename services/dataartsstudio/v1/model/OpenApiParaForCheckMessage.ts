

export class OpenApiParaForCheckMessage {
    private 'message_id'?: string;
    public action?: number;
    public time?: string;
    public constructor() { 
    }
    public withMessageId(messageId: string): OpenApiParaForCheckMessage {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): string | undefined {
        return this['message_id'];
    }
    public withAction(action: number): OpenApiParaForCheckMessage {
        this['action'] = action;
        return this;
    }
    public withTime(time: string): OpenApiParaForCheckMessage {
        this['time'] = time;
        return this;
    }
}