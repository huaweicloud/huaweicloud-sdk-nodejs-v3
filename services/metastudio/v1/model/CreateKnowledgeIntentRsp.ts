

export class CreateKnowledgeIntentRsp {
    private 'intent_id'?: string;
    public identify?: string;
    public constructor(intentId?: string) { 
        this['intent_id'] = intentId;
    }
    public withIntentId(intentId: string): CreateKnowledgeIntentRsp {
        this['intent_id'] = intentId;
        return this;
    }
    public set intentId(intentId: string  | undefined) {
        this['intent_id'] = intentId;
    }
    public get intentId(): string | undefined {
        return this['intent_id'];
    }
    public withIdentify(identify: string): CreateKnowledgeIntentRsp {
        this['identify'] = identify;
        return this;
    }
}