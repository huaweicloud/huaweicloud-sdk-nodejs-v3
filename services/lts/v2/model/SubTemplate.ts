

export class SubTemplate {
    private 'sub_type'?: SubTemplateSubTypeEnum | string;
    public content?: string;
    public constructor(subType?: string, content?: string) { 
        this['sub_type'] = subType;
        this['content'] = content;
    }
    public withSubType(subType: SubTemplateSubTypeEnum | string): SubTemplate {
        this['sub_type'] = subType;
        return this;
    }
    public set subType(subType: SubTemplateSubTypeEnum | string  | undefined) {
        this['sub_type'] = subType;
    }
    public get subType(): SubTemplateSubTypeEnum | string | undefined {
        return this['sub_type'];
    }
    public withContent(content: string): SubTemplate {
        this['content'] = content;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubTemplateSubTypeEnum {
    SMS = 'sms',
    DINGDING = 'dingding',
    WECHAT = 'wechat',
    WEBHOOK = 'webhook',
    EMAIL = 'email'
}
