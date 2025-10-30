

export class SubTemplateResBody {
    private 'sub_type'?: string;
    public content?: string;
    public topic?: string;
    public sendType?: string;
    public version?: string;
    public constructor() { 
    }
    public withSubType(subType: string): SubTemplateResBody {
        this['sub_type'] = subType;
        return this;
    }
    public set subType(subType: string  | undefined) {
        this['sub_type'] = subType;
    }
    public get subType(): string | undefined {
        return this['sub_type'];
    }
    public withContent(content: string): SubTemplateResBody {
        this['content'] = content;
        return this;
    }
    public withTopic(topic: string): SubTemplateResBody {
        this['topic'] = topic;
        return this;
    }
    public withSendType(sendType: string): SubTemplateResBody {
        this['sendType'] = sendType;
        return this;
    }
    public withVersion(version: string): SubTemplateResBody {
        this['version'] = version;
        return this;
    }
}