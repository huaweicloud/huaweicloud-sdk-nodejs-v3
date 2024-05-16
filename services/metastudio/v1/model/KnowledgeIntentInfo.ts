

export class KnowledgeIntentInfo {
    private 'intent_id'?: string;
    public name?: string;
    public identify?: string;
    public answer?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withIntentId(intentId: string): KnowledgeIntentInfo {
        this['intent_id'] = intentId;
        return this;
    }
    public set intentId(intentId: string  | undefined) {
        this['intent_id'] = intentId;
    }
    public get intentId(): string | undefined {
        return this['intent_id'];
    }
    public withName(name: string): KnowledgeIntentInfo {
        this['name'] = name;
        return this;
    }
    public withIdentify(identify: string): KnowledgeIntentInfo {
        this['identify'] = identify;
        return this;
    }
    public withAnswer(answer: string): KnowledgeIntentInfo {
        this['answer'] = answer;
        return this;
    }
    public withCreateTime(createTime: string): KnowledgeIntentInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): KnowledgeIntentInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}