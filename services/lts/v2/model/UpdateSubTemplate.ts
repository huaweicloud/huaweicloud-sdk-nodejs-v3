

export class UpdateSubTemplate {
    private 'sub_type'?: UpdateSubTemplateSubTypeEnum | string;
    public content?: string;
    public topic?: string;
    public constructor(subType?: string, content?: string) { 
        this['sub_type'] = subType;
        this['content'] = content;
    }
    public withSubType(subType: UpdateSubTemplateSubTypeEnum | string): UpdateSubTemplate {
        this['sub_type'] = subType;
        return this;
    }
    public set subType(subType: UpdateSubTemplateSubTypeEnum | string  | undefined) {
        this['sub_type'] = subType;
    }
    public get subType(): UpdateSubTemplateSubTypeEnum | string | undefined {
        return this['sub_type'];
    }
    public withContent(content: string): UpdateSubTemplate {
        this['content'] = content;
        return this;
    }
    public withTopic(topic: string): UpdateSubTemplate {
        this['topic'] = topic;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSubTemplateSubTypeEnum {
    SMS = 'sms',
    DINGDING = 'dingding',
    WECHAT = 'wechat',
    WEBHOOK = 'webhook',
    EMAIL = 'email',
    VOICE = 'voice'
}
