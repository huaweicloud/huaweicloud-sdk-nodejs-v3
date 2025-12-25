

export class WorkflowRunStreamRsp {
    public event?: string;
    private 'conversation_id'?: string;
    public data?: object;
    public createdTime?: number;
    public constructor() { 
    }
    public withEvent(event: string): WorkflowRunStreamRsp {
        this['event'] = event;
        return this;
    }
    public withConversationId(conversationId: string): WorkflowRunStreamRsp {
        this['conversation_id'] = conversationId;
        return this;
    }
    public set conversationId(conversationId: string  | undefined) {
        this['conversation_id'] = conversationId;
    }
    public get conversationId(): string | undefined {
        return this['conversation_id'];
    }
    public withData(data: object): WorkflowRunStreamRsp {
        this['data'] = data;
        return this;
    }
    public withCreatedTime(createdTime: number): WorkflowRunStreamRsp {
        this['createdTime'] = createdTime;
        return this;
    }
}